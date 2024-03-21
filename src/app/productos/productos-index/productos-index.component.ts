import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductosService } from '../productos.service';
import { Producto } from '../../interfaces/producto.interface';
import { CommonModule } from '@angular/common';
import { fadeInOutAnimations } from '../../animations';
import { RouterLink, Router } from '@angular/router';
import { SseClient } from 'ngx-sse-client';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-productos-index',
  standalone: true,
  imports: [CommonModule, RouterLink],
  animations: fadeInOutAnimations,
  templateUrl: './productos-index.component.html',
  styleUrl: './productos-index.component.css'
})
export class ProductosIndexComponent implements OnInit, OnDestroy {
  productos: Producto[] = [];
  cargando: boolean = true;
  private sseSubscription: Subscription | undefined;

  constructor(
    private productosService: ProductosService,
    private router: Router,
    private sseClient: SseClient
  ) {}

  ngOnInit() {
    this.actualizarproducto();

    // Suscripción al evento SSE 'new_product'
    this.sseSubscription = this.sseClient.stream('/api/sse').subscribe((event: any) => {
      console.log('Evento recibido:', event);
      // Actualizar la tabla de productos
      this.actualizarproducto();
    });
  }

  ngOnDestroy() {
    // Desubscribirse del evento SSE cuando se desmonta el componente
    if (this.sseSubscription) {
      this.sseSubscription.unsubscribe();
    }
  }

  // Método para obtener la lista de productos desde el servidor
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

  // Método para confirmar y eliminar un producto
  confirmDelete(id: any): void {
    if (confirm('¿Estás seguro de que deseas eliminar este producto?')) {
      this.deleteProducto(id);
    }
  }

  // Método para eliminar un producto
  deleteProducto(id: number): void {
    this.productosService.deleteProducto(id).subscribe(
      response => {
        console.log('Producto eliminado con éxito');
        alert('Producto eliminado');
        this.cargando = true;
        this.actualizarproducto();
      },
      error => console.error('Error al eliminar el producto:', error)
    );
  }
}