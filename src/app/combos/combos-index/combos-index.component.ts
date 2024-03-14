import { Component } from '@angular/core';
import { CombosService } from '../combos.service';
import { Combo } from '../../interfaces/combo.interface';
import { CommonModule } from '@angular/common';
import { fadeInOutAnimations } from '../../animations';
import { RouterLink, Router } from '@angular/router';
@Component({
  selector: 'app-combos-index',
  standalone: true,
  imports: [CommonModule, RouterLink],
  animations: fadeInOutAnimations,
  templateUrl: './combos-index.component.html',
  styleUrl: './combos-index.component.css'
})
export class CombosIndexComponent {
  combos: Combo[] = [];
  cargando: boolean = true;

  constructor(private combosService: CombosService,
    private router: Router,) { }

  ngOnInit() {
    this.actualizarcombo();
  }
  actualizarcombo() {
    this.combosService.indexcombo().subscribe(
      combos => {
        this.combos = combos;
        this.cargando = false; 
      },
      error => {
        console.error('Error al obtener los combos:', error);
        
      }
    );
  }
  confirmDelete(id: any): void {
    if (confirm('¿Estás seguro de que deseas eliminar este combo?')) {
       this.deleteCombo(id);
    }
   }
   
   deleteCombo(id: number): void {
    this.combosService.deleteCombo(id).subscribe(
      response=>{
        console.log('combo elimnado con exito');
      alert('combo eliminado');
      this.cargando = true; 
      this.actualizarcombo();
      },
      error => console.error('Error al obtener los combos:', error)
    );
     }
}