import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from '../peliculas.service';
import { GenerosService } from '../../generos/generos.service';
import { CommonModule } from '@angular/common';
import { Pelicula } from '../../interfaces/pelicula.interface';
import { Genero } from '../../interfaces/genero.interface';
import { fadeInOutAnimations } from '../../animations';
@Component({
  selector: 'app-peliculas-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  animations: [fadeInOutAnimations],
  templateUrl: './peliculas-edit.component.html',
  styleUrl: './peliculas-edit.component.css'
})
export class PeliculasEditComponent {
  peliculasEditForm!: FormGroup;
  id: number = 0;
  cargando: boolean = true;
  generos: Genero[] = [];
  generosSeleccionados: Genero[] = [];
  isLoading = false;
 constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private peliculasService: PeliculasService,
    private generosService: GenerosService
 ) {}

 ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadPelicula();
    this.initForm();
    this.generosService.indexgenero().subscribe(generos => {
      this.generos = generos;
   });
 }

 private initForm(): void {
    this.peliculasEditForm = this.formBuilder.group({
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
 private loadPelicula(): void {
  if (this.id) {
     this.peliculasService.getPeliculaById(this.id).subscribe((pelicula: Pelicula) => {
       this.peliculasEditForm.patchValue({
         titulo: pelicula.titulo,
         sinopsis: pelicula.sinopsis,
         duracion: pelicula.duracion,
         clasificacion: pelicula.clasificacion
       });
       this.generosSeleccionados = pelicula.generos;
       this.cargando = false;
     });
  }
 }

 isGeneroSeleccionado(genero: Genero): boolean {
  return this.generosSeleccionados.some(p => p.id === genero.id);
}

 onSubmit(): void {
  if (this.peliculasEditForm.valid) {
    this.isLoading = true;
    const formValue = this.peliculasEditForm.value;
    const data = {
      ...formValue,
      generos: this.generosSeleccionados.map(genero => genero.id)
    };

    this.peliculasService.updatePelicula(this.id, data).subscribe(
      response => {
        console.log('Pelicula editado con exito');
        alert('Informacion actualizada con exito');
        this.router.navigate(['/peliculas/index']);
      },
      error => console.error('Error al editar el pelicula:', error)
    );
  }
}
}