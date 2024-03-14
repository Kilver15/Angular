import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genero } from '../interfaces/genero.interface';
import { CookieService } from '../cookies.service';
@Injectable({
  providedIn: 'root'
})
export class GenerosService {
  private apiUrl = 'http://localhost:8000/api/generos';
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
 
  createGenero(genero: Genero): Observable<Genero> {
     return this.http.post<Genero>(this.apiUrl, genero, this.getOptions());
  }
 
  indexgenero(): Observable<Genero[]> {
     return this.http.get<Genero[]>(this.apiUrl, this.getOptions());
  }
 
  getGeneroById(id: number): Observable<Genero> {
     return this.http.get<Genero>(`${this.apiUrl}/${id}`, this.getOptions());
  }
 
  updateGenero(id: number, genero: Genero): Observable<Genero> {
     return this.http.put<Genero>(`${this.apiUrl}/${id}`, genero, this.getOptions());
  }
 deleteGenero(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, this.getOptions());
   }
   
 }
 
