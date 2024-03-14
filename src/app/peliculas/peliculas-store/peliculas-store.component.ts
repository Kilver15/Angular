import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule  } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { CommonModule } from '@angular/common';
import { GenerosService } from '../../generos/generos.service';
import { PeliculasService } from '../peliculas.service';
import { Router } from '@angular/router';
import { fadeInOutAnimations } from '../../animations';
import { Genero } from '../../interfaces/genero.interface';
@Component({
  selector: 'app-peliculas-store',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './peliculas-store.component.html',
  styleUrl: './peliculas-store.component.css',
  animations: fadeInOutAnimations,
})
export class PeliculasStoreComponent {
    peliculasStoreForm!: FormGroup;
    generos: Genero[] = [];
    generosSeleccionados: Genero[] = [];
  
    constructor(private formBuilder: FormBuilder,
      private generosService: GenerosService,
      private peliculasService: PeliculasService,
      private router: Router) { }
  
    ngOnInit(): void {
      this.peliculasStoreForm = this.formBuilder.group({
        titulo: ['',[ Validators.required]],
        sinopsis: ['',[ Validators.required]],
        duracion: ['',[ Validators.required]],
        clasificacion: ['',[ Validators.required]],
        generos: this.formBuilder.array([])
      });
      this.generosService.indexgenero().subscribe(generos => {
        this.generos = generos;
     });
    }
  
    toggleGenero(genero: Genero, event: any) {
      if (event.target && event.target.checked !== undefined) {
        const isChecked = event.target.checked;
        if (isChecked) {
          this.generosSeleccionados.push(genero);
        } else {
          this.generosSeleccionados = this.generosSeleccionados.filter(p => p.id !== genero.id);
        }
      }
    }
  
    onSubmit(): void {
      if (this.peliculasStoreForm.valid) {
        const formValue = this.peliculasStoreForm.value;
        const data = {
          ...formValue,
          generos: this.generosSeleccionados.map(genero => genero.id)
        };
    
        console.log('Datos a enviar:', data);
    
        this.peliculasService.crearPelicula(data).subscribe(
          response => {
            console.log('Pelicula creado:', response);
            alert('Pelicula creado con exito.');
            this.router.navigate(['/peliculas/index']);
          },
          error => console.error('Error al crear el Combo:', error)
        );
      }
    }
    }