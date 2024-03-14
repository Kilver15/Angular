import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Combo } from '../interfaces/combo.interface';
import { CookieService } from '../cookies.service';

@Injectable({
 providedIn: 'root'
})
export class CombosService {
 private apiUrl = 'http://localhost:8000/api/combos';
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

 createCombo(combo: Combo): Observable<Combo> {
    return this.http.post<Combo>(this.apiUrl, combo, this.getOptions());
 }

 indexcombo(): Observable<Combo[]> {
    return this.http.get<Combo[]>(this.apiUrl, this.getOptions());
 }

 getComboById(id: number): Observable<Combo> {
    return this.http.get<Combo>(`${this.apiUrl}/${id}`, this.getOptions());
 }

 updateCombo(id: number, combo: Combo): Observable<Combo> {
    return this.http.put<Combo>(`${this.apiUrl}/${id}`, combo, this.getOptions());
 }

deleteCombo(id: number): Observable<any> {
   return this.http.delete(`${this.apiUrl}/${id}`, this.getOptions());
  }
  
}
