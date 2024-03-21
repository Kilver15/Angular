import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from '../cookies.service';
import { tap } from 'rxjs/operators';
import { AuthInterceptor } from '../auth.interceptor';

interface VerificationResponse {
  token: string;
  rol_id?: number;
}

@Injectable({
  providedIn: 'root'
})
export class VerificacionService {
  private apiUrl = 'http://localhost:8000/api/auth/verify-code';

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  token = this.cookieService.getCookie('sanctToken');

 verifyCode(code: number): Observable<VerificationResponse> {
  const headers = new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set('Authorization', 'Bearer ' + this.token);

  const options = { headers, withCredentials: true, skipInterceptors: [AuthInterceptor] };
  
    return this.http.post<VerificationResponse>(this.apiUrl, {code}, options).pipe(
      tap(response => {
        this.cookieService.deleteCookie('sanctToken', '/', 'localhost', true, 'Lax');
          
      })
    );;
 }
}