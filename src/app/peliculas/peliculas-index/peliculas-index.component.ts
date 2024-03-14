import { Component } from '@angular/core';
import { PeliculasService } from '../peliculas.service';
import { Pelicula } from '../../interfaces/pelicula.interface';
import { CommonModule } from '@angular/common';
import { fadeInOutAnimations } from '../../animations';
import { RouterLink, Router } from '@angular/router';
@Component({
  selector: 'app-peliculas-index',
  standalone: true,
  imports: [CommonModule, RouterLink],
  animations: fadeInOutAnimations,
  templateUrl: './peliculas-index.component.html',
  styleUrl: './peliculas-index.component.css'
})
export class PeliculasIndexComponent {
  peliculas: Pelicula[] = [];
  cargando: boolean = true;

  constructor(private peliculasService: PeliculasService,
    private router: Router,) { }

  ngOnInit() {
    this.actualizarpeliculas();
  }
  actualizarpeliculas() {
    this.peliculasService.indexpelicula().subscribe(
      peliculas => {
        this.peliculas = peliculas;
        this.cargando = false; 
      },
      error => {
        console.error('Error al obtener los peliculas:', error);
        
      }
    );
  }
  confirmDelete(id: any): void {
    if (confirm('¿Estás seguro de que deseas eliminar esta pelicula?')) {
       this.deletePelicula(id);
    }
   }
   
   deletePelicula(id: number): void {
    this.peliculasService.deletePelicula(id).subscribe(
      response=>{
        console.log('peli elimnado con exito');
      alert('Pelicula eliminada');
      this.cargando = true; 
      this.actualizarpeliculas();
      },
      error => console.error('Error al obtener los peliculas:', error)
    );
     }
}