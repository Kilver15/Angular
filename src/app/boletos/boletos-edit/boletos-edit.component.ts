import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BoletosService } from '../boletos.service';
import { FuncionesService } from '../../funciones/funciones.service';
import { UsersService } from '../../users/users.service';
import { CommonModule } from '@angular/common';
import { Boleto } from '../../interfaces/boleto.interface';
import { User } from '../../interfaces/user.interface';
import { Funcion } from '../../interfaces/funcion.interface';
import { fadeInOutAnimations } from '../../animations';
@Component({
  selector: 'app-boletos-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  animations: [fadeInOutAnimations],
  templateUrl: './boletos-edit.component.html',
  styleUrl: './boletos-edit.component.css'
})
export class BoletosEditComponent {
  boletosEditForm!: FormGroup;
  id: number = 0;
  cargando: boolean = true;
  funciones: Funcion[] = [];
  users: User[] = [];
  isLoading = false;

 constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService,
    private funcionesService: FuncionesService,
    private boletosService: BoletosService
 ) {}

 ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadBoleto();
    this.initForm();
    this.funcionesService.indexfuncion().subscribe(funciones => {
      this.funciones = funciones;
   });
   this.usersService.indexuser().subscribe(user => {
    this.users = user;
 });
 }

 private initForm(): void {
    this.boletosEditForm = this.formBuilder.group({
      id_funcion: ['',[Validators.required]],
      id_user: ['',[ Validators.required]],
      fila: ['',[ Validators.required]],
      asiento: ['',[ Validators.required]],
      precio: ['',[ Validators.required]],
    });
 }

 private loadBoleto(): void {
  if (this.id) {
     this.boletosService.getBoletoById(this.id).subscribe((boleto: Boleto) => {
       this.boletosEditForm.patchValue({
         id_funcion: boleto.id_funcion,
         id_user: boleto.id_user,
         fila: boleto.fila,
         asiento: boleto.asiento,
         precio: boleto.precio
       });
       this.cargando = false;
     });
  }
 }

 onSubmit(): void {
    if (this.boletosEditForm.valid) {
      this.isLoading = true;
      this.boletosService.updateBoleto(this.id, this.boletosEditForm.value).subscribe(
        response=>{
          console.log('funcion editada con exito');
      alert('Informacion actualizada con exito');
      this.router.navigate(['/funciones/index']);
        },
        error => console.error('Error al crear la funciones:', error)
      );
    }
 }
}