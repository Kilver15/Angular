import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { CommonModule } from '@angular/common';
import { CinesService } from '../cines.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cines-store',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './cines-store.component.html',
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 }))
      ])
    ])
  ],
  styleUrl: './cines-store.component.css'
})
export class CinesStoreComponent implements OnInit {
  cinesStoreForm!: FormGroup;
  isLoading = false;
  constructor(private formBuilder: FormBuilder,
    private cinesService: CinesService,
    private router: Router) { }

  ngOnInit(): void {
    this.cinesStoreForm = this.formBuilder.group({
      nombre: ['',[ Validators.required]],
      dirección: ['',[ Validators.required, Validators.minLength(10)]],
      ciudad: ['',[ Validators.required, Validators.minLength(5)]],
      capacidad_total: ['',[ Validators.required]]
    });
  }

  

  onSubmit(): void {
    if (this.cinesStoreForm.valid) {
      this.isLoading = true;
      console.log(this.cinesStoreForm.value);
      this.cinesService.createCine(this.cinesStoreForm.value).subscribe(
        response => {
          console.log('Cine creado:', response);
        alert('Cine creado con exito.');
        this.router.navigate(['/cines/index']);
        },
        error => console.error('Error al crear el cine:', error)
      );
    }
    }
  }