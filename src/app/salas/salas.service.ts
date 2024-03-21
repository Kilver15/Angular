import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sala } from '../interfaces/sala.interface';

@Injectable({
  providedIn: 'root'
})
export class SalasService {
  private apiUrl = 'http://localhost:8000/api/salas';

  constructor(private http: HttpClient) { }

  createSala(sala: Sala): Observable<Sala> {
    return this.http.post<Sala>(this.apiUrl, sala);
  }

  indexsala(): Observable<Sala[]> {
    return this.http.get<Sala[]>(this.apiUrl);
  }

  getSalaById(id: number): Observable<Sala> {
    return this.http.get<Sala>(`${this.apiUrl}/${id}`);
  }

  updateSala(id: number, sala: Sala): Observable<Sala> {
    return this.http.put<Sala>(`${this.apiUrl}/${id}`, sala);
  }

  deleteSala(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}