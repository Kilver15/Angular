import { CommonModule } from '@angular/common';
import {  Component } from '@angular/core';
import { fadeInOutAnimations } from '../animations';
import { Router } from '@angular/router';
import { Juego } from '../interfaces/juego.interface';
import { JuegosService } from '../juegos/juegos.service';
import { PusherserviceService } from '../pusherservice.service';
@Component({
  selector: 'app-partida',
  standalone: true,
  imports: [
    CommonModule,
  ],
  animations: [ fadeInOutAnimations],
  styleUrl: './partida.component.css',
  templateUrl: './partida.component.html'
})
export class PartidaComponent { 
  score: number = 0;
  shipX: number = 0; // Posición X inicial del barco
  shipY: number = 100; // Posición Y inicial del barco
  shipWidth: number = 50; // Ancho del barco
  shipHeight: number = 50; // Alto del barco
  shipSpeed: number = 5; // Velocidad del movimiento del barco

  bulletX: number = 0; // Posición X del disparo
  bulletY: number = 0; // Posición Y del disparo
  bulletSpeed: number = 10; // Velocidad del disparo
  bulletFired: boolean = false; // Indica si el disparo está en el aire
  gamestarted: number = 0;
  player1: number = 1
  constructor(private router: Router,private juegosService: JuegosService,
    private pusherService: PusherserviceService,
  ) { }

  ngOnInit() {
    this.pusherService.subscribeToJoinGame(data => {
      this.gamestarted = 1;
    });
    // Iniciar el movimiento del barco
    this.moveShip();


  }

  moveShip() {
    // Mover el barco horizontalmente
    setInterval(() => {
      this.shipX += this.shipSpeed;

      // Si el barco llega al final de la pantalla, reiniciarlo desde el principio
      if (this.shipX > window.innerWidth) {
        this.shipX = 0 - this.shipWidth;
      }
    }, 100);
  }

  onClick(event: MouseEvent) {
    if (!this.bulletFired) {
      // Obtener la posición del clic
      const x = event.clientX;
      const y = event.clientY;

      // Disparar el proyectil desde la parte superior de la pantalla
      this.bulletX = x;
      this.bulletY = 0;
      this.bulletFired = true;

      // Iniciar el movimiento del proyectil
      this.moveBullet();
    }
  }

  moveBullet() {
    // Mover el proyectil verticalmente
    const bulletInterval = setInterval(() => {
      this.bulletY += this.bulletSpeed;

      // Verificar si el proyectil golpea al barco
      if (this.hitShip(this.bulletX, this.bulletY)) {
        this.score++; // Incrementar el marcador
        clearInterval(bulletInterval); // Detener el movimiento del proyectil
        this.bulletFired = false; // Reiniciar el estado del disparo
      }

      // Si el proyectil llega al final de la pantalla, detener su movimiento
      if (this.bulletY > window.innerHeight) {
        clearInterval(bulletInterval);
        this.bulletFired = false;
      }
    }, 100);
  }

  hitShip(bulletX: number, bulletY: number): boolean {
    // Verificar si las coordenadas del proyectil están dentro del área del barco
    const withinX = bulletX >= this.shipX && bulletX <= this.shipX + this.shipWidth;
    const withinY = bulletY >= this.shipY && bulletY <= this.shipY + this.shipHeight;
    return withinX && withinY;
  }
}
