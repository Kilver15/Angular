import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionesService } from '../funciones.service';
import { SalasService } from '../../salas/salas.service';
import { PeliculasService } from '../../peliculas/peliculas.service';
import { CommonModule } from '@angular/common';
import { Funcion } from '../../interfaces/funcion.interface';
import { Sala } from '../../interfaces/sala.interface';
import { Pelicula } from '../../interfaces/pelicula.interface';
import { fadeInOutAnimations } from '../../animations';
@Component({
  selector: 'app-funciones-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  animations: [fadeInOutAnimations],
  templateUrl: './funciones-edit.component.html',
  styleUrl: './funciones-edit.component.css'
})
export class FuncionesEditComponent {
  funcionesEditForm!: FormGroup;
  id: number = 0;
  cargando: boolean = true;
  peliculas: Pelicula[] = [];
  salas: Sala[] = [];
  isLoading = false;

 constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private peliculasService: PeliculasService,
    private funcionesService: FuncionesService,
    private salasService: SalasService
 ) {}

 ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadFuncion();
    this.initForm();
    this.salasService.indexsala().subscribe(salas => {
      this.salas = salas;
   });
   this.peliculasService.indexpelicula().subscribe(peliculas => {
    this.peliculas = peliculas;
 });
 }

 private initForm(): void {
    this.funcionesEditForm = this.formBuilder.group({
      sala_id: ['',[Validators.required]],
      pelicula_id: ['',[ Validators.required]],
      fecha: ['',[ Validators.required]],
      hora_inicio: ['',[ Validators.required]],
    });
 }

 private loadFuncion(): void {
  if (this.id) {
     this.funcionesService.getFuncionById(this.id).subscribe((funcion: Funcion) => {
       this.funcionesEditForm.patchValue({
         sala_id: funcion.sala_id,
         pelicula_id: funcion.pelicula_id,
         fecha: funcion.fecha,
         hora_inicio: funcion.hora_inicio
       });
       this.cargando = false;
     });
  }
 }

 onSubmit(): void {
    if (this.funcionesEditForm.valid) {
      this.isLoading = true;
      this.funcionesService.updateFuncion(this.id, this.funcionesEditForm.value).subscribe(
        response=>{
          console.log('funcion editada con exito');
      alert('Informacion actualizada con exito');
      this.router.navigate(['/funciones/index']);
        },
        error => console.error('Error al crear la funciones:', error)
      );
    }
 }
}