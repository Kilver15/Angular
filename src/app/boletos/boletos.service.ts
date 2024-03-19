import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Boleto } from '../interfaces/boleto.interface';
import { CookieService } from '../cookies.service';

@Injectable({
  providedIn: 'root'
})
export class BoletosService {
  private apiUrl = 'http://localhost:8000/api/boletos';
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
 
  createBoleto(boleto: Boleto): Observable<Boleto> {
     return this.http.post<Boleto>(this.apiUrl, boleto, this.getOptions());
  }
 
  indexboleto(): Observable<Boleto[]> {
     return this.http.get<Boleto[]>(this.apiUrl, this.getOptions());
  }
 
  getBoletoById(id: number): Observable<Boleto> {
     return this.http.get<Boleto>(`${this.apiUrl}/${id}`, this.getOptions());
  }
 
  updateBoleto(id: number, boleto: Boleto): Observable<Boleto> {
     return this.http.put<Boleto>(`${this.apiUrl}/${id}`, boleto, this.getOptions());
  }
 
 deleteBoleto(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, this.getOptions());
   }
   
 }
 