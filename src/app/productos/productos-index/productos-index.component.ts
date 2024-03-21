import { Component } from '@angular/core';
import { ProductosService } from '../productos.service';
import { Producto } from '../../interfaces/producto.interface';
import { CommonModule } from '@angular/common';
import { fadeInOutAnimations } from '../../animations';
import { RouterLink } from '@angular/router';
import { CookieService } from '../../cookies.service';
@Component({
  selector: 'app-productos-index',
  standalone: true,
  imports: [CommonModule, RouterLink],
  animations: fadeInOutAnimations,
  templateUrl: './productos-index.component.html',
  styleUrl: './productos-index.component.css'
})
export class ProductosIndexComponent {
  productos: Producto[] = [];
  cargando: boolean = true;
  rolId: number = 0;

  constructor(private productosService: ProductosService,
    private cookieService: CookieService) { }

  ngOnInit() {
    this.actualizarproducto();
    this.rolId = parseInt(this.cookieService.getCookie('rol') || '0', 10);
  }
  actualizarproducto() {
    this.productosService.indexproducto().subscribe(
      productos => {
        this.productos = productos;
        this.cargando = false; 
      },
      error => {
        console.error('Error al obtener los productos:', error);
        
      }
    );
  }
  confirmDelete(id: any): void {
    if (confirm('¿Estás seguro de que deseas eliminar este producto?')) {
       this.deleteProducto(id);
    }
   }
   
   deleteProducto(id: number): void {
    this.productosService.deleteProducto(id).subscribe(
      response=>{
        console.log('producto elimnado con exito');
      alert('producto eliminado');
      this.cargando = true; 
      this.actualizarproducto();
      },
      error => console.error('Error al obtener los productos:', error)
    );
     }
}
