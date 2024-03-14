import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pelicula } from '../interfaces/pelicula.interface';
import { CookieService } from '../cookies.service';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private apiUrl = 'http://localhost:8000/api/peliculas';
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


crearPelicula(pelicula: Pelicula): Observable<Pelicula> {
  return this.http.post<Pelicula>(`${this.apiUrl}peliculas`, pelicula, this.getOptions());
}

indexpelicula(): Observable<Pelicula[]> {
  return this.http.get<Pelicula[]>(this.apiUrl, this.getOptions());
}

getPeliculaById(id: number): Observable<Pelicula> {
  return this.http.get<Pelicula>(`${this.apiUrl}peliculas/${id}`, this.getOptions());
}

updatePelicula(id: number, pelicula: Pelicula): Observable<Pelicula> {
  return this.http.put<Pelicula>(`${this.apiUrl}peliculas/${id}`, pelicula, this.getOptions());
}

deletePelicula(id: number): Observable<any> {
 return this.http.delete(`${this.apiUrl}peliculas/${id}`, this.getOptions());
}

}
