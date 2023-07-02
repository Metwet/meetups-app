import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';
import { Observable, Subject, catchError, map, of } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = `${environment.backendOrigin}`;

  constructor(private http: HttpClient, private routes: Router) { }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(`del_meetups_auth_token`);
  }

  checkAdminStatus(){
    return !!localStorage.getItem(`del_meetups_ADMIN`);
  }

  isAdmin():Observable<boolean> {
    return this.http.get<any>(`${this.baseUrl}/role/ADMIN`).pipe(
      map((response)=>{
        if(response.name === 'ADMIN'){
          localStorage.setItem('del_meetups_ADMIN', response.name)
          return true
        } else {
          return false
        }
      }),
      catchError(()=> of(false))
    )
  }

  login(email: string, password: string): Observable<null> {
    return this.http
    .post<{token: string}>(`${this.baseUrl}/auth/login`, {email, password})
    .pipe(
      map((res)=>{
        if(res.token){
          localStorage.setItem('del_meetups_auth_token', res.token)
        }
        return null;
      })
    )
  }

  logout() {
    localStorage.removeItem('del_meetups_auth_token');
    localStorage.removeItem('del_meetups_ADMIN');
    this.routes.navigate([`/login`])
  }

  getToken():string {
    return localStorage.getItem('del_meetups_auth_token') || '';
  }

  getCurrentUser():User {
    return jwtDecode(this.getToken());
  }
}
