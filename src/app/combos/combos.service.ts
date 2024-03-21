import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Combo } from '../interfaces/combo.interface';

@Injectable({
 providedIn: 'root'
})
export class CombosService {
 private apiUrl = 'http://localhost:8000/api/combos';

 constructor(private http: HttpClient) { }


 createCombo(combo: Combo): Observable<Combo> {
    return this.http.post<Combo>(this.apiUrl, combo);
 }

 indexcombo(): Observable<Combo[]> {
    return this.http.get<Combo[]>(this.apiUrl);
 }

 getComboById(id: number): Observable<Combo> {
    return this.http.get<Combo>(`${this.apiUrl}/${id}`);
 }

 updateCombo(id: number, combo: Combo): Observable<Combo> {
    return this.http.put<Combo>(`${this.apiUrl}/${id}`, combo);
 }

deleteCombo(id: number): Observable<any> {
   return this.http.delete(`${this.apiUrl}/${id}`);
  }
  
}
