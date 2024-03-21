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
 
  constructor(private http: HttpClient, private cookieService: CookieService) { }
 
 
  createProducto(producto: Producto): Observable<Producto> {
     return this.http.post<Producto>(this.apiUrl, producto);
  }
 
  indexproducto(): Observable<Producto[]> {
     return this.http.get<Producto[]>(this.apiUrl);
  }
 
  getProductoById(id: number): Observable<Producto> {
     return this.http.get<Producto>(`${this.apiUrl}/${id}`);
  }
 
  updateProducto(id: number, producto: Producto): Observable<Producto> {
     return this.http.put<Producto>(`${this.apiUrl}/${id}`, producto);
  }
 deleteProducto(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
   }
   
 }
 