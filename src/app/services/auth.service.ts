import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = `${environment.backendOrigin}/auth`;
  
  constructor(private http: HttpClient, private routes: Router) { }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(`del_meetups_auth_token`);
  }

  login(email: string, password: string): Observable<null> {
    return this.http
    .post<{token: string}>(`${this.baseUrl}/login`, {email, password})
    .pipe(
      map((res)=>{
        if(res.token){
          console.log(res.token);
          localStorage.setItem('del_meetups_auth_token', res.token)
        }
        return null;
      })
    )
  }

  logout() {
    localStorage.removeItem('del_meetups_auth_token');
    this.routes.navigate([`/login`])
  }

  getToken():string {
    return localStorage.getItem('del_meetups_auth_token') || '';
  }
}
