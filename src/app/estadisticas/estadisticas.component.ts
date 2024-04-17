import { CommonModule } from '@angular/common';
import {  Component } from '@angular/core';
import { fadeInOutAnimations } from '../animations';
import { Juego } from '../interfaces/juego.interface';
import { User } from '../interfaces/user.interface';
import { UsersService } from '../users/user.service';
import { JuegosService } from '../juegos/juegos.service';

@Component({
  selector: 'app-estadisticas',
  standalone: true,
  imports: [
    CommonModule,
  ],
  animations: [ fadeInOutAnimations],
  styleUrl: './estadisticas.component.css',
  templateUrl: './estadisticas.component.html'
})
export class EstadisticasComponent { 
  juegos: Juego[] = [];
  users: User[] = [];

  constructor(private usersService: UsersService, 
    private juegosService: JuegosService) { }
}
