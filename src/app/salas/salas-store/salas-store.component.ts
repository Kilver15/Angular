import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CinesService } from '../../cines/cines.service';
import { SalasService } from '../salas.service';
import { fadeInOutAnimations } from '../../animations';
import { Cine } from '../../interfaces/cine.interface';

@Component({
  selector: 'app-salas-store',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink, RouterLinkActive],
  animations: fadeInOutAnimations,
  templateUrl: './salas-store.component.html',
  styleUrl: './salas-store.component.css'
})
export class SalasStoreComponent {
  salasStoreForm!: FormGroup;
  cines: Cine[] = [];
  isLoading = false;
  constructor(private formBuilder: FormBuilder,
    private salasService: SalasService,
    private cinesService: CinesService,
    private router: Router) { }

  ngOnInit(): void {
    this.salasStoreForm = this.formBuilder.group({
      cine_id: ['',[ Validators.required]],
      numero_sala: ['',[ Validators.required]],
      capacidad: ['',[ Validators.required, Validators.minLength(1)]],
    });
    this.cinesService.indexcine().subscribe(cines => {
      this.cines = cines;
   });
  }
  
  onSubmit(): void {
    if (this.salasStoreForm.valid) {
      this.isLoading = true;
      console.log(this.salasStoreForm.value);
      this.salasService.createSala(this.salasStoreForm.value).subscribe(
        response => {
          console.log('Sala creada:', response);
        alert('Sala creada con exito.');
          this.router.navigate(['/salas/index']);
        },
        error => console.error('Error al crear la sala:', error)
      );
    }
    }
}
