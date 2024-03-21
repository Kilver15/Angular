import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule  } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { CommonModule } from '@angular/common';
import { ProductosService } from '../../productos/productos.service';
import { CombosService } from '../combos.service';
import { Router } from '@angular/router';
import { fadeInOutAnimations } from '../../animations';
import { Producto } from '../../interfaces/producto.interface';
@Component({
  selector: 'app-combos-store',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './combos-store.component.html',
  styleUrl: './combos-store.component.css',
  animations: fadeInOutAnimations,
})
export class CombosStoreComponent {
  combosStoreForm!: FormGroup;
  productos: Producto[] = [];
  productosSeleccionados: Producto[] = [];
  isLoading = false;

  constructor(private formBuilder: FormBuilder,
    private productosService: ProductosService,
    private combosService: CombosService,
    private router: Router) { }

  ngOnInit(): void {
    this.combosStoreForm = this.formBuilder.group({
      nombre: ['',[ Validators.required]],
      descripcion: ['',[ Validators.required]],
      precio: ['',[ Validators.required]],
      productos: this.formBuilder.array([])
    });
    this.productosService.indexproducto().subscribe(productos => {
      this.productos = productos;
   });
  }

  toggleProducto(producto: Producto, event: any) {
    if (event.target && event.target.checked !== undefined) {
      const isChecked = event.target.checked;
      if (isChecked) {
        this.productosSeleccionados.push(producto);
      } else {
        this.productosSeleccionados = this.productosSeleccionados.filter(p => p.id !== producto.id);
      }
    }
  }

  onSubmit(): void {
    if (this.combosStoreForm.valid) {
      this.isLoading = true;
      const formValue = this.combosStoreForm.value;
      const data = {
        ...formValue,
        productos: this.productosSeleccionados.map(producto => producto.id)
      };
  
      console.log('Datos a enviar:', data);
  
      this.combosService.createCombo(data).subscribe(
        response => {
          console.log('Combo creado:', response);
          alert('Combo creado con exito.');
          this.router.navigate(['/combos/index']);
        },
        error => console.error('Error al crear el Combo:', error)
      );
    }
  }
  }