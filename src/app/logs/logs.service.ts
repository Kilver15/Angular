import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Log } from '../interfaces/log.interface';
@Injectable({
  providedIn: 'root'
})
export class LogsService {
  private apiUrl = 'http://localhost:8000/api/logs';
 
  constructor(private http: HttpClient) { }
 

  indexlog(): Observable<Log[]> {
     return this.http.get<Log[]>(this.apiUrl);
  }
 
  getLogById(id: number): Observable<Log> {
     return this.http.get<Log>(`${this.apiUrl}/${id}`);
  }

 deleteLog(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
   }
   
 }
 
