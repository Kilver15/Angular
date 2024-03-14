import { Component } from '@angular/core';
import { CinesService } from '../../cines/cines.service';
import { SalasService } from '../salas.service';
import { Sala } from '../../interfaces/sala.interface';
import { Cine } from '../../interfaces/cine.interface';
import { CommonModule } from '@angular/common';
import { fadeInOutAnimations } from '../../animations';
import { RouterLink, Router } from '@angular/router';
@Component({
  selector: 'app-salas-index',
  standalone: true,
  imports: [CommonModule, RouterLink],
  animations: fadeInOutAnimations,
  templateUrl: './salas-index.component.html',
  styleUrl: './salas-index.component.css'
})
export class SalasIndexComponent {
  salas: Sala[] = [];
  cines: Cine[] = [];
  cargando: boolean = true;

  constructor(private cinesService: CinesService,
    private salasService: SalasService,) { }

  ngOnInit() {
    this.actualizarsala();
    this.cinesService.indexcine().subscribe(cines => {
      this.cines = cines;
   });
  }

  getCineNombre(cineId: number): string {
    const cine = this.cines.find(cine => cine.id === cineId);
    return cine ? cine.nombre : 'Cine no encontrado';
   }
   

  actualizarsala() {
    this.salasService.indexsala().subscribe(
      salas => {
        this.salas = salas;
        this.cargando = false; 
      },
      error => {
        console.error('Error al obtener las salas:', error);
        
      }
    );
  }
  confirmDelete(id: any): void {
    if (confirm('¿Estás seguro de que deseas eliminar esta sala?')) {
       this.deleteSala(id);
    }
   }
   
   deleteSala(id: number): void {
    this.salasService.deleteSala(id).subscribe(
      response=>{
        console.log('sala elimnada con exito');
      alert('Sala eliminada');
      this.cargando = true; 
      this.actualizarsala();
      },
      error => console.error('Error al obtener las salas:', error)
    );
     }
}
