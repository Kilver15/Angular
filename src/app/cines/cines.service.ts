import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cine } from '../interfaces/cine.interface';
import { CookieService } from '../cookies.service';

@Injectable({
 providedIn: 'root'
})
export class CinesService {
 private apiUrl = 'http://localhost:8000/api/cines';
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

 createCine(cine: Cine): Observable<Cine> {
    return this.http.post<Cine>(this.apiUrl, cine, this.getOptions());
 }

 indexcine(): Observable<Cine[]> {
    return this.http.get<Cine[]>(this.apiUrl, this.getOptions());
 }

 getCineById(id: number): Observable<Cine> {
    return this.http.get<Cine>(`${this.apiUrl}/${id}`, this.getOptions());
 }

 updateCine(id: number, cine: Cine): Observable<Cine> {
    return this.http.put<Cine>(`${this.apiUrl}/${id}`, cine, this.getOptions());
 }

 // cines.service.ts
deleteCine(id: number): Observable<any> {
   return this.http.delete(`${this.apiUrl}/${id}`, this.getOptions());
  }
  
}
