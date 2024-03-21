import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Boleto } from '../interfaces/boleto.interface';

@Injectable({
  providedIn: 'root'
})
export class BoletosService {
  private apiUrl = 'http://localhost:8000/api/boletos';
 
  constructor(private http: HttpClient) { }
 
 
  createBoleto(boleto: Boleto): Observable<Boleto> {
     return this.http.post<Boleto>(this.apiUrl, boleto);
  }
 
  indexboleto(): Observable<Boleto[]> {
     return this.http.get<Boleto[]>(this.apiUrl);
  }
 
  getBoletoById(id: number): Observable<Boleto> {
     return this.http.get<Boleto>(`${this.apiUrl}/${id}`);
  }
 
  updateBoleto(id: number, boleto: Boleto): Observable<Boleto> {
     return this.http.put<Boleto>(`${this.apiUrl}/${id}`, boleto);
  }
 
 deleteBoleto(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
   }
   
 }
 