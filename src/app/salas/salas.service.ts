import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sala } from '../interfaces/sala.interface';
import { CookieService } from '../cookies.service';
@Injectable({
  providedIn: 'root'
})
export class SalasService {

 private apiUrl = 'http://localhost:8000/api/salas';
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

 createSala(sala: Sala): Observable<Sala> {
    return this.http.post<Sala>(this.apiUrl, sala, this.getOptions());
 }

 indexsala(): Observable<Sala[]> {
    return this.http.get<Sala[]>(this.apiUrl, this.getOptions());
 }

 getSalaById(id: number): Observable<Sala> {
    return this.http.get<Sala>(`${this.apiUrl}/${id}`, this.getOptions());
 }

 updateSala(id: number, sala: Sala): Observable<Sala> {
    return this.http.put<Sala>(`${this.apiUrl}/${id}`, sala, this.getOptions());
 }

deleteSala(id: number): Observable<any> {
   return this.http.delete(`${this.apiUrl}/${id}`, this.getOptions());
  }
  
}
