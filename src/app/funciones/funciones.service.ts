import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcion } from '../interfaces/funcion.interface';
import { CookieService } from '../cookies.service';
@Injectable({
  providedIn: 'root'
})
export class FuncionesService {

  private apiUrl = 'http://localhost:8000/api/funciones';
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
 
  createFuncion(funcion: Funcion): Observable<Funcion> {
     return this.http.post<Funcion>(this.apiUrl, funcion, this.getOptions());
  }
 
  indexfuncion(): Observable<Funcion[]> {
     return this.http.get<Funcion[]>(this.apiUrl, this.getOptions());
  }
 
  getFuncionById(id: number): Observable<Funcion> {
     return this.http.get<Funcion>(`${this.apiUrl}/${id}`, this.getOptions());
  }
 
  updateFuncion(id: number, sala: Funcion): Observable<Funcion> {
     return this.http.put<Funcion>(`${this.apiUrl}/${id}`, sala, this.getOptions());
  }
 
 deleteFuncion(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, this.getOptions());
   }
   
 }
 