import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Log } from '../interfaces/log.interface';
import { CookieService } from '../cookies.service';
@Injectable({
  providedIn: 'root'
})
export class LogsService {
  private apiUrl = 'http://localhost:8000/api/logs';
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

  indexlog(): Observable<Log[]> {
     return this.http.get<Log[]>(this.apiUrl, this.getOptions());
  }
 
  getGeneroById(id: number): Observable<Log> {
     return this.http.get<Log>(`${this.apiUrl}/${id}`, this.getOptions());
  }

 deleteGenero(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, this.getOptions());
   }
   
 }
 
