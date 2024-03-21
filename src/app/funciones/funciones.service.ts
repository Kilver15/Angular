import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcion } from '../interfaces/funcion.interface';
@Injectable({
  providedIn: 'root'
})
export class FuncionesService {

  private apiUrl = 'http://localhost:8000/api/funciones';
 
  constructor(private http: HttpClient) { }
 
  createFuncion(funcion: Funcion): Observable<Funcion> {
     return this.http.post<Funcion>(this.apiUrl, funcion);
  }
 
  indexfuncion(): Observable<Funcion[]> {
     return this.http.get<Funcion[]>(this.apiUrl);
  }
 
  getFuncionById(id: number): Observable<Funcion> {
     return this.http.get<Funcion>(`${this.apiUrl}/${id}`);
  }
 
  updateFuncion(id: number, sala: Funcion): Observable<Funcion> {
     return this.http.put<Funcion>(`${this.apiUrl}/${id}`, sala);
  }
 
 deleteFuncion(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
   }
   
 }
 