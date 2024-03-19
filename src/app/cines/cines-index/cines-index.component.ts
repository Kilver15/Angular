import { Component } from '@angular/core';
import { CinesService } from '../cines.service';
import { Cine } from '../../interfaces/cine.interface';
import { CommonModule } from '@angular/common';
import { fadeInOutAnimations } from '../../animations';
import { RouterLink, Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
@Component({
  selector: 'app-cines-index',
  standalone: true,
  imports: [CommonModule, RouterLink],
  animations: fadeInOutAnimations,
  templateUrl: './cines-index.component.html',
  styleUrl: './cines-index.component.css'
})
export class CinesIndexComponent {
  cines: Cine[] = [];
  cargando: boolean = true;
  private pollingSubscription: Subscription | null = null;
  private componentActive = true;

  constructor(private cinesService: CinesService,
    private router: Router,) { }

  ngOnInit() {
    this.pollingSubscription = interval(10000)
    .pipe(takeWhile(() => this.componentActive))
    .subscribe(() => {
      this.actualizarcine();
    });
  }
  actualizarcine() {
    this.cinesService.indexcine().subscribe(
      cines => {
        this.cines = cines;
        this.cargando = false; 
      },
      error => {
        console.error('Error al obtener los cines:', error);
        
      }
    );
  }
  confirmDelete(id: any): void {
    if (confirm('¿Estás seguro de que deseas eliminar este cine?')) {
       this.deleteCine(id);
    }
   }
   
   deleteCine(id: number): void {
    this.cinesService.deleteCine(id).subscribe(
      response=>{
        console.log('cine elimnado con exito');
      alert('Cine eliminado');
      this.cargando = true; 
      this.actualizarcine();
      },
      error => console.error('Error al obtener los cine:', error)
    );
     }

     ngOnDestroy() {
      this.componentActive = false; // Marcar el componente como inactivo
      if (this.pollingSubscription) {
        this.pollingSubscription.unsubscribe(); // Cancelar la suscripción
      }
    }
}