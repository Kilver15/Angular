import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pelicula } from '../interfaces/pelicula.interface';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private apiUrl = 'http://localhost:8000/api/peliculas';
  constructor(private http: HttpClient) { }


crearPelicula(pelicula: Pelicula): Observable<Pelicula> {
  return this.http.post<Pelicula>(this.apiUrl, pelicula);
}

indexpelicula(): Observable<Pelicula[]> {
  return this.http.get<Pelicula[]>(this.apiUrl);
}

getPeliculaById(id: number): Observable<Pelicula> {
  return this.http.get<Pelicula>(`${this.apiUrl}/${id}`);
}

updatePelicula(id: number, pelicula: Pelicula): Observable<Pelicula> {
  return this.http.put<Pelicula>(`${this.apiUrl}/${id}`, pelicula);
}

deletePelicula(id: number): Observable<any> {
 return this.http.delete(`${this.apiUrl}/${id}`);
}

}
