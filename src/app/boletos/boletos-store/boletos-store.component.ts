import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BoletosService } from '../boletos.service';
import { FuncionesService } from '../../funciones/funciones.service';
import { UsersService } from '../../users/users.service';
import { fadeInOutAnimations } from '../../animations';
import { Funcion } from '../../interfaces/funcion.interface';
import { User } from '../../interfaces/user.interface';
@Component({
  selector: 'app-boletos-store',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink, RouterLinkActive],
  animations: fadeInOutAnimations,
  templateUrl: './boletos-store.component.html',
  styleUrl: './boletos-store.component.css'
})
export class BoletosStoreComponent {
  boletosStoreForm!: FormGroup;
  funciones: Funcion[] = [];
  users: User[] = [];

  constructor(private formBuilder: FormBuilder,
    private boletosService: BoletosService,
    private usersService: UsersService,
    private funcionesService: FuncionesService,
    private router: Router) { }

  ngOnInit(): void {
    this.boletosStoreForm = this.formBuilder.group({
      id_funcion: ['',[Validators.required]],
      id_user: ['',[ Validators.required]],
      fila: ['',[ Validators.required]],
      asiento: ['',[ Validators.required]],
      precio: ['',[ Validators.required]],
    });
    this.funcionesService.indexfuncion().subscribe(funciones => {
      this.funciones = funciones;
   });
   this.usersService.indexuser().subscribe(users => {
    this.users = users;
 });
  }

  onSubmit(): void {
    if (this.boletosStoreForm.valid) {
      console.log(this.boletosStoreForm.value);
      this.boletosService.createBoleto(this.boletosStoreForm.value).subscribe(
        response => {
          console.log('Boleto creada:', response);
        alert('Boleto creada con exito.');
          this.router.navigate(['/boletos/index']);
        },
        error => console.error('Error al crear la funcion:', error)
      );
    }
    }
}
