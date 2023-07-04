import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = `${environment.backendOrigin}/user`;
 
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}`);
  }

  updateUser(userId: number, userData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${userId}`, userData);
  }

  updateUserRole(roleData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/role`, roleData);
  }

  deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${userId}`);
  }
}
