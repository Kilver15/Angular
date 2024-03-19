import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { Rol } from '../interfaces/rol.interface';
import { CookieService } from '../cookies.service';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = 'http://localhost:8000/api/usuarios';
  private token = this.cookieService.getCookie('authToken');
 
  constructor(private http: HttpClient, private cookieService: CookieService) { }
 
  private getHeaders(): HttpHeaders {
     return new HttpHeaders()
       .set('Content-Type', 'application/json')
       .set('Authorization', 'Bearer ' + this.token);
  }
 
  private getOptions(): { headers: HttpHeaders, withCredentials: true } {
     return {
       headers: this.getHeaders(),
       withCredentials: true
     };
  }

  indexroles(): Observable<Rol[]> {
   return this.http.get<Rol[]>('http://localhost:8000/api/roles', this.getOptions());
}
 
  indexuser(): Observable<User[]> {
     return this.http.get<User[]>(this.apiUrl, this.getOptions());
  }
 
  getUserById(id: number): Observable<User> {
     return this.http.get<User>(`${this.apiUrl}/${id}`, this.getOptions());
  }
 
  updateUser(id: number, user: User): Observable<User> {
     return this.http.put<User>(`${this.apiUrl}/${id}`, user, this.getOptions());
  }
 
 deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, this.getOptions());
   }
   
 }