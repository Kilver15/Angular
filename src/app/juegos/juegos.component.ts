import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { fadeInOutAnimations } from '../animations';
import { Juego } from '../interfaces/juego.interface';
import { User } from '../interfaces/user.interface';
import { UsersService } from '../users/user.service';
import { Router, RouterLink } from '@angular/router';
import { JuegosService } from './juegos.service';
import { PusherserviceService } from '../pusherservice.service';
import { OnDestroy, OnInit } from '@angular/core';

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
export class JuegosComponent implements OnInit { 
  juegos: Juego[] = [];
  users: User[] = [];
  isLoading = true;

  currentId: number = 0;
  constructor(private usersService: UsersService, 
    private router: Router, 
    private juegosService: JuegosService,
    private pusherService: PusherserviceService) { }

  ngOnInit(): void {
    this.getJuegos();
    this.getUser();
    this.pusherService.subscribeToGeneroUpdatedEvent((data) => {
      this.getJuegos();
    });
  }

  getUser(): void {
    this.usersService.getCurrentUser().subscribe(userId => {
      this.currentId = userId;
      this.isLoading = false;
      console.log("Usuario: ", userId);
    });
  }

  getUserNombre(userId: number): string {
    const users = this.users.find(user => user.id === userId);
    return users ? users.name : 'Usuario no encontrado';
 }

  getJuegos(): void {
    this.usersService.indexuser().subscribe(users => this.users = users);
    this.juegosService.index().subscribe(juegos => this.juegos = juegos);
  }

  crearPartida() {
    let data: Juego = {
      jugador1: this.currentId,
      jugador2: 0,
      puntuacion1: 0,
      puntuacion2: 0,
      estado: '',
    };
    console.log('Creando partida...', data);
    this.juegosService.createJuego(data).subscribe(juego => {
      console.log('Partida creada:', juego);
      this.router.navigate(['/partida']);
    });}
  
  unirsePartida() {
    let data: Juego = {
      jugador1: 0,
      jugador2: this.currentId,
      puntuacion1: 0,
      puntuacion2: 0,
      estado: '',
    };
    console.log('Uniendose a partida...', data);
    this.juegosService.unirsePartida(data).subscribe(juego => {
      console.log('Ingreso a partida:', juego);
      this.router.navigate(['/partida']);
    });
  }


}