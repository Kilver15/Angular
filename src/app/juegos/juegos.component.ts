import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { fadeInOutAnimations } from '../animations';
import { Juego } from '../interfaces/juego.interface';
import { User } from '../interfaces/user.interface';
import { UsersService } from '../users/user.service';
import { Router, RouterLink } from '@angular/router';
import { CookieService } from '../cookies.service';

@Component({
  selector: 'app-juegos',
  standalone: true,
  imports: [
    CommonModule, RouterLink
  ],
  animations: [ fadeInOutAnimations],
  styleUrl: './juegos.component.css',
  templateUrl: './juegos.component.html',
})
export class JuegosComponent { 
  juegos: Juego[] = [];
  users: User[] = [];

  constructor(private usersService: UsersService, 
    private router: Router, 
    private cookieService: CookieService) { }

  ngOnInit(): void {
    this.usersService.indexuser().subscribe(users => this.users = users);
  }

  getUserNombre(userId: number): string {
    const users = this.users.find(user => user.id === userId);
    return users ? users.name : 'Usuario no encontrado';
 }

  crearPartida() {
    console.log('Creando partida...');
    this.router.navigate(['/partida']);
  }
}