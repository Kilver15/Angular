import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from '../cookies.service';
import { tap } from 'rxjs/operators';
import { AuthService } from '../auth.service'

interface VerificationResponse {
  token: string;
  user_id?: number;
}

@Injectable({
  providedIn: 'root'
})
export class VerificacionService {
  private apiUrl = 'http://localhost:8000/api/auth/verify-code';

  constructor(private http: HttpClient, private cookieService: CookieService, private authService: AuthService) { }

  token = this.cookieService.getCookie('sanctToken');

 verifyCode(code: number): Observable<VerificationResponse> {
  const headers = new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set('Authorization', 'Bearer ' + this.token);

  const options = { headers, withCredentials: true };

    return this.http.post<VerificationResponse>(this.apiUrl, {code}, options).pipe(
      tap(response => {
        if (response.user_id) {
          this.authService.setUserId(response.user_id);
        }
      })
    );;
 }
}