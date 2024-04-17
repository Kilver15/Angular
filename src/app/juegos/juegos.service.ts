import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Juego } from '../interfaces/juego.interface';

@Injectable({
 providedIn: 'root'
})
export class JuegosService {
 private apiUrl = 'http://localhost:8000/api/juegos';

 constructor(private http: HttpClient) { }

 index(): Observable<Juego[]> {
    return this.http.get<Juego[]>(this.apiUrl);
 }
}