import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FuncionesService } from '../funciones.service';
import { SalasService } from '../../salas/salas.service';
import { PeliculasService } from '../../peliculas/peliculas.service';
import { fadeInOutAnimations } from '../../animations';
import { Sala } from '../../interfaces/sala.interface';
import { Pelicula } from '../../interfaces/pelicula.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-funciones-store',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink, RouterLinkActive, DatePipe],
  animations: fadeInOutAnimations,
  templateUrl: './funciones-store.component.html',
  styleUrl: './funciones-store.component.css',
  providers: [DatePipe]
})
export class FuncionesStoreComponent {
  funcionesStoreForm!: FormGroup;
  salas: Sala[] = [];
  peliculas: Pelicula[] = [];

  constructor(private formBuilder: FormBuilder,
    private salasService: SalasService,
    private peliculasService: PeliculasService,
    private funcionesService: FuncionesService,
    private datePipe: DatePipe,
    private router: Router) { }

  ngOnInit(): void {
    this.funcionesStoreForm = this.formBuilder.group({
      sala_id: ['',[Validators.required]],
      pelicula_id: ['',[ Validators.required]],
      fecha: ['',[ Validators.required]],
      hora_inicio: ['',[ Validators.required]],
    });
    this.salasService.indexsala().subscribe(salas => {
      this.salas = salas;
   });
   this.peliculasService.indexpelicula().subscribe(peliculas => {
    this.peliculas = peliculas;
 });
  }
  
  formatDate(date: Date | null): string | null {
    if (date) {
       return this.datePipe.transform(date, 'yyyy-MM-dd');
    }
    return null;
   }
   

   formatTime(time: string | null): string | null {
    if (time) {
       const timeParts = time.split(':');
       const date = new Date();
       date.setHours(parseInt(timeParts[0], 10), parseInt(timeParts[1], 10));
       return this.datePipe.transform(date, 'HH:mm');
    }
    return null;
   }
   
  

  onSubmit(): void {
    if (this.funcionesStoreForm.valid) {
      const formattedFecha = this.formatDate(this.funcionesStoreForm.get('fecha')?.value);
      if (formattedFecha) {
        this.funcionesStoreForm.get('fecha')?.setValue(formattedFecha, {emitEvent: false});
      }

      const formattedHoraInicio = this.formatTime(this.funcionesStoreForm.get('hora_inicio')?.value);
      if (formattedHoraInicio) {
        this.funcionesStoreForm.get('hora_inicio')?.setValue(formattedHoraInicio, {emitEvent: false});
      }
      console.log(this.funcionesStoreForm.value);
      this.funcionesService.createFuncion(this.funcionesStoreForm.value).subscribe(
        response => {
          console.log('Funcion creada:', response);
        alert('Funcion creada con exito.');
          this.router.navigate(['/funciones/index']);
        },
        error => console.error('Error al crear la funcion:', error)
      );
    }
    }
}
