import { Component } from '@angular/core';
import { LogsService } from '../logs.service';
import { Log } from '../../interfaces/log.interface';
import { UsersService } from '../../users/users.service';
import { User } from '../../interfaces/user.interface';
import { CommonModule } from '@angular/common';
import { fadeInOutAnimations } from '../../animations';
import { RouterLink, Router, UrlSegmentGroup } from '@angular/router';

@Component({
  selector: 'app-logs-index',
  standalone: true,
  imports: [CommonModule, RouterLink],
  animations: fadeInOutAnimations,
  templateUrl: './logs-index.component.html',
  styleUrl: './logs-index.component.css'
})
export class LogsIndexComponent {
  logs: Log[] = [];
  users: User[] = [];
  
  cargando: boolean = true;

  constructor(private logsService: LogsService,
    private usersService: UsersService,
    private router: Router,) { }

  ngOnInit() {
    this.actualizarlog();
    this.usersService.indexuser().subscribe(users => {
      this.users = users;
   });;
  }

  getUserNombre(userId: number) {
    const user = this.users.find(user => user.id === userId);
    return user ? user.name : 'Usuario no encontrado';
   }

   formatDatos(datos: any): string {
    return JSON.stringify(datos, null, 2);
  }

  actualizarlog() {
    this.logsService.indexlog().subscribe(
      logs => {
        this.logs = logs;
        this.cargando = false; 
      },
      error => {
        console.error('Error al obtener los logs:', error);
        
      }
    );
  }
  confirmDelete(id: any): void {
    if (confirm('¿Estás seguro de que deseas eliminar este log?')) {
       this.deleteGenero(id);
    }
   }
   
   deleteGenero(id: number): void {
    this.logsService.deleteLog(id).subscribe(
      response=>{
        console.log('genero elimnado con exito');
      alert('genero eliminado');
      this.cargando = true; 
      this.actualizarlog();
      },
      error => console.error('Error al obtener los generos:', error)
    );
     }
}
