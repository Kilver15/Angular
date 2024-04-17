import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeInOutAnimations } from '../animations';
import { RouterLink } from '@angular/router';
import { CookieService } from '../cookies.service';

@Component({
  selector: 'app-funciones-index',
  standalone: true,
  imports: [CommonModule, RouterLink],
  animations: fadeInOutAnimations,
  templateUrl: './partida.component.html',
  styleUrl: './partida.component.css'
})
export class PartidaComponent implements OnInit {
  gameid:number  = 0;
  player1:number =0;
  player2:number = 0;
  score: number = 0;
  shipX: number = -60; // Posición X inicial del barco
  shipY: number = 300; // Posición Y inicial del barco
  shipWidth: number = 50; // Ancho del barco
  shipHeight: number = 50; // Alto del barco
  shipSpeed: number = 5; // Velocidad del movimiento del barco

  bulletX: number = 0; // Posición X del disparo
  bulletY: number = 0; // Posición Y del disparo
  bulletSpeed: number = 20; // Velocidad del disparo
  bulletFired: boolean = false; // Indica si el disparo está en el aire

  remainingAmmo: number = 2; // Contador de municiones restantes
  showRestartButton: boolean = false; // Indica si se debe mostrar el botón de reinicio

  constructor() { }

  ngOnInit() {
    // Iniciar el movimiento del barco
    this.moveShip();
  }

  moveShip() {
    // Mover el barco horizontalmente
    const shipInterval = setInterval(() => {
      this.shipX += this.shipSpeed;

      // Si el barco llega al final de la pantalla, detener el movimiento y reiniciar su posición
      if (this.shipX > window.innerWidth) {
        clearInterval(shipInterval);
        this.shipX = -60;
        this.moveShip()
        this.remainingAmmo = 2
      }
    }, 100);
  }

  onClick(event: MouseEvent) {
    if (!this.bulletFired && this.remainingAmmo > 0) {
      // Obtener la posición del clic
      const x = event.clientX;
      const y = event.clientY;

      // Disparar el proyectil desde la parte superior de la pantalla
      this.bulletX = x;
      this.bulletY = 0;
      this.bulletFired = true;

      // Iniciar el movimiento del proyectil
      this.moveBullet();

      // Reducir la cantidad de municiones restantes
      this.remainingAmmo--;

      // Si se quedó sin municiones, mostrar el botón de reinicio
      if (this.remainingAmmo === 0) {
        this.showRestartButton = true;
      }
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

        // Volver a aparecer el barco al inicio
        this.shipX = 0;
        // Reiniciar el contador de balas
        this.remainingAmmo = 2;

        // Si se quedó sin municiones, mostrar el botón de reinicio
        if (this.remainingAmmo === 0) {
          this.showRestartButton = true;
        }
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

  // Método para reiniciar el juego
  restartGame() {
    // Reiniciar el contador de balas
    this.remainingAmmo = 2;
    
    // Reiniciar la posición del barco y la munición
    this.shipX = 0;
    this.remainingAmmo = 2;
    this.showRestartButton = false; // Ocultar el botón de reinicio
  }

  // Método para manejar el clic en el botón de reinicio
  onRestartClick() {
    // Reiniciar el juego
    this.restartGame();
    // Mover el barco nuevamente
    this.moveShip();
  }
}