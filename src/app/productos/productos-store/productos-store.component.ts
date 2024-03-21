import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fadeInOutAnimations } from '../../animations';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { CommonModule } from '@angular/common';
import { ProductosService } from '../productos.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-productos-store',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './productos-store.component.html',
  styleUrl: './productos-store.component.css',
  animations: [fadeInOutAnimations]
})
export class ProductosStoreComponent {
  productosStoreForm!: FormGroup;
  isLoading = false;
  constructor(private formBuilder: FormBuilder,
    private productosService: ProductosService,
    private router: Router) { }

  ngOnInit(): void {
    this.productosStoreForm = this.formBuilder.group({
      nombre: ['',[ Validators.required]],
      descripcion: ['',[ Validators.required]],
      precio: ['',[ Validators.required]],
    });
  }

  

  onSubmit(): void {
    if (this.productosStoreForm.valid) {
      this.isLoading = true;
      console.log(this.productosStoreForm.value);
      this.productosService.createProducto(this.productosStoreForm.value).subscribe(
        response => {
          console.log('Producto creado:', response);
        alert('Producto creado con exito.');
        this.router.navigate(['/productos/index']);
        },
        error => console.error('Error al crear el producto:', error)
      );
    }
    }
  }
