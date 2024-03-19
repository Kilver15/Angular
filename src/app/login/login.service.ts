import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from '../cookies.service';

interface LoginResponse {
  message: string;
  token?: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:8000/api/auth/login';
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

  loginUser(loginData: { email: string, password: string }): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.apiUrl, loginData);
  }

  logoutUser() {
    this.cookieService.deleteFCookie('authToken');
    return this.http.post('http://localhost:8000/api/auth/logout',this.getOptions())
  }
}