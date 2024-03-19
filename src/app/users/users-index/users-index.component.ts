import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../../interfaces/user.interface';
import { Rol } from '../../interfaces/rol.interface';
import { CommonModule } from '@angular/common';
import { fadeInOutAnimations } from '../../animations';
import { RouterLink, Router } from '@angular/router';
@Component({
  selector: 'app-users-index',
  standalone: true,
  imports: [CommonModule, RouterLink],
  animations: fadeInOutAnimations,
  templateUrl: './users-index.component.html',
  styleUrl: './users-index.component.css'
})
export class UsersIndexComponent {
  users: User[] = [];
  roles: Rol[] = [];
  cargando: boolean = true;

  constructor(
    private usersService: UsersService,) { }

  ngOnInit() {
    this.actualizaruser();
    this.usersService.indexroles().subscribe(roles => {
      this.roles = roles;
   });
   }

   getRolNombre(rolId: number): string {
    const roles = this.roles.find(role => role.id === rolId);
    return roles ? roles.rol : 'Rol no encontrado';
 }

  actualizaruser() {
    this.usersService.indexuser().subscribe(
      users => {
        this.users = users;
        this.cargando = false; 
      },
      error => {
        console.error('Error al obtener los usuarios:', error);
        
      }
    );
  }
  confirmDelete(id: any): void {
    if (confirm('¿Estás seguro de que deseas eliminar esta sala?')) {
       this.deleteUser(id);
    }
   }
   
   deleteUser(id: number): void {
    this.usersService.deleteUser(id).subscribe(
      response=>{
        console.log('user elimnada con exito');
      alert('Usuario eliminado');
      this.cargando = true; 
      this.actualizaruser();
      },
      error => console.error('Error al obtener las salas:', error)
    );
     }
}
