import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from '../cookies.service';

interface VerificationResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class VerificacionService {
  private apiUrl = 'http://localhost:8000/api/auth/verifyCode';

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  token = this.cookieService.getCookie('authToken');

 verifyCode(code: number): Observable<VerificationResponse> {
  const headers = new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set('Authorization', 'Bearer ' + this.token);

  const options = { headers, withCredentials: true };

    return this.http.post<VerificationResponse>(this.apiUrl, {code}, options);
 }
}