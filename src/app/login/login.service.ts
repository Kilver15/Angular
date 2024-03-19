import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface LoginResponse {
  message: string;
  token?: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:8000/api/auth/login';

  constructor(private http: HttpClient) { }

  loginUser(loginData: { email: string, password: string }): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.apiUrl, loginData);
  }

  logoutUser() {
    return this.http.post('http://localhost:8000/api/auth/logout',{})
  }
}