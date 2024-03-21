import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cine } from '../interfaces/cine.interface';

@Injectable({
 providedIn: 'root'
})
export class CinesService {
 private apiUrl = 'http://localhost:8000/api/cines';

 constructor(private http: HttpClient) { }

 createCine(cine: Cine): Observable<Cine> {
    return this.http.post<Cine>(this.apiUrl, cine);
 }

 indexcine(): Observable<Cine[]> {
    return this.http.get<Cine[]>(this.apiUrl);
 }

 getCineById(id: number): Observable<Cine> {
    return this.http.get<Cine>(`${this.apiUrl}/${id}`);
 }

 updateCine(id: number, cine: Cine): Observable<Cine> {
    return this.http.put<Cine>(`${this.apiUrl}/${id}`, cine);
 }

 // cines.service.ts
deleteCine(id: number): Observable<any> {
   return this.http.delete(`${this.apiUrl}/${id}`);
  }
  
}
