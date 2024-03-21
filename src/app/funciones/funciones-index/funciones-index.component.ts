import { Component } from '@angular/core';
import { FuncionesService } from '../funciones.service';
import { SalasService } from '../../salas/salas.service';
import { PeliculasService } from '../../peliculas/peliculas.service';
import { Sala } from '../../interfaces/sala.interface';
import { Pelicula } from '../../interfaces/pelicula.interface';
import { Funcion } from '../../interfaces/funcion.interface';
import { CommonModule } from '@angular/common';
import { fadeInOutAnimations } from '../../animations';
import { RouterLink } from '@angular/router';
import { CookieService } from '../../cookies.service';
@Component({
  selector: 'app-funciones-index',
  standalone: true,
  imports: [CommonModule, RouterLink],
  animations: fadeInOutAnimations,
  templateUrl: './funciones-index.component.html',
  styleUrl: './funciones-index.component.css'
})
export class FuncionesIndexComponent {
  salas: Sala[] = [];
  peliculas: Pelicula[] = [];
  funciones: Funcion[] = [];
  cargando: boolean = true;
  rolId: number = 0;

  constructor(private peliculasService: PeliculasService,
    private salasService: SalasService,
    private funcionesService: FuncionesService,
    private cookieService: CookieService) { }

  ngOnInit() {
    this.actualizarfuncion();
    this.rolId = parseInt(this.cookieService.getCookie('rol') || '0', 10);
    this.salasService.indexsala().subscribe(salas => {
      this.salas = salas;
   });
   this.peliculasService.indexpelicula().subscribe(peliculas => {
    this.peliculas = peliculas;
 });
  }

  getPeliculaNombre(peliculaId: number): string {
    const pelicula = this.peliculas.find(pelicula => pelicula.id === peliculaId);
    return pelicula ? pelicula.titulo : 'Pelicula no encontrado';
   }
   getSalaNombre(salaId: number) {
    const sala = this.salas.find(sala => sala.id === salaId);
    return sala ? sala.numero_sala : 'Sala no encontrada';
   }
   

  actualizarfuncion() {
    this.funcionesService.indexfuncion().subscribe(
      funciones => {
        this.funciones = funciones;
        this.cargando = false; 
      },
      error => {
        console.error('Error al obtener las funciones:', error);
        
      }
    );
  }
  confirmDelete(id: any): void {
    if (confirm('¿Estás seguro de que deseas eliminar esta funcion?')) {
       this.deleteFuncion(id);
    }
   }
   
   deleteFuncion(id: number): void {
    this.funcionesService.deleteFuncion(id).subscribe(
      response=>{
        console.log('fncion elimnada con exito');
      alert('Funcion eliminada');
      this.cargando = true; 
      this.actualizarfuncion();
      },
      error => console.error('Error al obtener las funciones:', error)
    );
     }
}
