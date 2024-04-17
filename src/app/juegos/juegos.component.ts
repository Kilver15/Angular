import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { fadeInOutAnimations } from '../animations';
import { Juego } from '../interfaces/juego.interface';
import { User } from '../interfaces/user.interface';
import { UsersService } from '../users/user.service';
import { Router, RouterLink } from '@angular/router';
import { JuegosService } from './juegos.service';
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
    private juegosService: JuegosService) { }

  ngOnInit(): void {
    this.usersService.indexuser().subscribe(users => this.users = users);
    this.getJuegos();
  }

  getUserNombre(userId: number): string {
    const users = this.users.find(user => user.id === userId);
    return users ? users.name : 'Usuario no encontrado';
 }

  getJuegos(): void {
    this.juegosService.index().subscribe(juegos => this.juegos = juegos);
  }

  crearPartida() {
    console.log('Creando partida...');
    this.router.navigate(['/partida']);
  }
}