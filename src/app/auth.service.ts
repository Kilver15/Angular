import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
 providedIn: 'root'
})
export class AuthService {
 private userIdSubject = new BehaviorSubject<number | null>(null);
 userId$ = this.userIdSubject.asObservable();

 constructor() {}

 setUserId(userId: number): void {
    this.userIdSubject.next(userId);
 }

 clearUserId(): void {
    this.userIdSubject.next(null);
 }
}