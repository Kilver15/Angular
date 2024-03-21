import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CombosService } from '../combos.service';
import { ProductosService } from '../../productos/productos.service';
import { CommonModule } from '@angular/common';
import { Combo } from '../../interfaces/combo.interface';
import { Producto } from '../../interfaces/producto.interface';
import { fadeInOutAnimations } from '../../animations';
@Component({
  selector: 'app-combos-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  animations: [fadeInOutAnimations],
  templateUrl: './combos-edit.component.html',
  styleUrl: './combos-edit.component.css'
})
export class CombosEditComponent {
  combosEditForm!: FormGroup;
  id: number = 0;
  cargando: boolean = true;
  productos: Producto[] = [];
  productosSeleccionados: Producto[] = [];
  isLoading = false;

 constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private combosService: CombosService,
    private productosService: ProductosService
 ) {}

 ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadCombo();
    this.initForm();
    this.productosService.indexproducto().subscribe(productos => {
      this.productos = productos;
   });
 }

 private initForm(): void {
    this.combosEditForm = this.formBuilder.group({
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
 private loadCombo(): void {
  if (this.id) {
     this.combosService.getComboById(this.id).subscribe((combo: Combo) => {
       this.combosEditForm.patchValue({
         nombre: combo.nombre,
         descripcion: combo.descripcion,
         precio: combo.precio
       });
       this.productosSeleccionados = combo.productos;
       this.cargando = false;
     });
  }
 }

 isProductoSeleccionado(producto: Producto): boolean {
  return this.productosSeleccionados.some(p => p.id === producto.id);
}

 onSubmit(): void {
  if (this.combosEditForm.valid) {
    this.isLoading = true;
    const formValue = this.combosEditForm.value;
    const data = {
      ...formValue,
      productos: this.productosSeleccionados.map(producto => producto.id)
    };

    this.combosService.updateCombo(this.id, data).subscribe(
      response => {
        console.log('combo editado con exito');
        alert('Informacion actualizada con exito');
        this.router.navigate(['/combos/index']);
      },
      error => console.error('Error al editar el combo:', error)
    );
  }
}
}