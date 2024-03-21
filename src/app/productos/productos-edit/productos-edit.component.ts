import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from '../productos.service';
import { CommonModule } from '@angular/common';
import { Producto } from '../../interfaces/producto.interface';
import { fadeInOutAnimations } from '../../animations';
@Component({
  selector: 'app-productos-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  animations: [fadeInOutAnimations],
  templateUrl: './productos-edit.component.html',
  styleUrl: './productos-edit.component.css'
})
export class ProductosEditComponent {
  productosEditForm!: FormGroup;
  id: number = 0;
  cargando: boolean = true;
  isLoading = false;

 constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private productosService: ProductosService
 ) {}

 ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadGenero();
    this.initForm();
 }

 private initForm(): void {
    this.productosEditForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', Validators.required]
    });
 }

 private loadGenero(): void {
  if (this.id) {
     this.productosService.getProductoById(this.id).subscribe((producto: Producto) => {
       this.productosEditForm.patchValue({
         nombre: producto.nombre,
         descripcion: producto.descripcion,
         precio: producto.precio
       });
       this.cargando = false;
     });
  }
 }

 onSubmit(): void {
    if (this.productosEditForm.valid) {
      this.isLoading = true;
      this.productosService.updateProducto(this.id, this.productosEditForm.value).subscribe(
        response=>{
          console.log('producto editado con exito');
      alert('Informacion actualizada con exito');
      this.router.navigate(['/productos/index']);
        },
        error => console.error('Error al actualizar el producto:', error)
      );
    }
 }
}