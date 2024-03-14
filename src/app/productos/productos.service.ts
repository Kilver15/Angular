import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/producto.interface';
import { CookieService } from '../cookies.service';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private apiUrl = 'http://localhost:8000/api/productos';
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
 
  createProducto(producto: Producto): Observable<Producto> {
     return this.http.post<Producto>(this.apiUrl, producto, this.getOptions());
  }
 
  indexproducto(): Observable<Producto[]> {
     return this.http.get<Producto[]>(this.apiUrl, this.getOptions());
  }
 
  getProductoById(id: number): Observable<Producto> {
     return this.http.get<Producto>(`${this.apiUrl}/${id}`, this.getOptions());
  }
 
  updateProducto(id: number, producto: Producto): Observable<Producto> {
     return this.http.put<Producto>(`${this.apiUrl}/${id}`, producto, this.getOptions());
  }
 deleteProducto(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, this.getOptions());
   }
   
 }
 