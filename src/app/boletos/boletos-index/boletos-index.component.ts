import { Component } from '@angular/core';
import { BoletosService } from '../boletos.service';
import { FuncionesService } from '../../funciones/funciones.service';
import { UsersService } from '../../users/users.service';
import { Boleto } from '../../interfaces/boleto.interface';
import { User } from '../../interfaces/user.interface';
import { Funcion } from '../../interfaces/funcion.interface';
import { CommonModule } from '@angular/common';
import { fadeInOutAnimations } from '../../animations';
import { RouterLink } from '@angular/router';
import { CookieService } from '../../cookies.service';
@Component({
  selector: 'app-boletos-index',
  standalone: true,
  imports: [CommonModule, RouterLink],
  animations: fadeInOutAnimations,
  templateUrl: './boletos-index.component.html',
  styleUrl: './boletos-index.component.css'
})
export class BoletosIndexComponent {
  boletos: Boleto[] = [];
  users: User[] = [];
  funciones: Funcion[] = [];
  cargando: boolean = true;
  rolId: number = 0;

  constructor(private usersService: UsersService,
    private boletosService: BoletosService,
    private funcionesService: FuncionesService,
    private cookieService: CookieService) { }

  ngOnInit() {
    this.actualizarboleto();
    this.rolId = parseInt(this.cookieService.getCookie('rol') || '0', 10);
    this.funcionesService.indexfuncion().subscribe(funciones => {
      this.funciones = funciones;
   });
   this.usersService.indexuser().subscribe(users => {
    this.users = users;
 });
  }

  getFuncionNombre(funcionId: number) {
    const funcion = this.funciones.find(funcion => funcion.id === funcionId);
    return funcion ? funcion.sala_id : 'Funcion no encontrada';
   }
   getUserNombre(userId: number) {
    const user = this.users.find(user => user.id === userId);
    return user ? user.name : 'Usuario no encontrado';
   }
   

  actualizarboleto() {
    this.boletosService.indexboleto().subscribe(
      boletos => {
        this.boletos = boletos;
        this.cargando = false; 
      },
      error => {
        console.error('Error al obtener las funciones:', error);
        
      }
    );
  }
  confirmDelete(id: any): void {
    if (confirm('¿Estás seguro de que deseas eliminar este boleto?')) {
       this.deleteBoleto(id);
    }
   }
   
   deleteBoleto(id: number): void {
    this.boletosService.deleteBoleto(id).subscribe(
      response=>{
        console.log('fncion elimnada con exito');
      alert('Funcion eliminada');
      this.cargando = true; 
      this.actualizarboleto();
      },
      error => console.error('Error al obtener las funciones:', error)
    );
     }
}
