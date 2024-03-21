import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users.service';
import { CommonModule } from '@angular/common';
import { User } from '../../interfaces/user.interface';
import { Rol } from '../../interfaces/rol.interface';
import { fadeInOutAnimations } from '../../animations';
@Component({
  selector: 'app-users-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  animations: [fadeInOutAnimations],
  templateUrl: './users-edit.component.html',
  styleUrl: './users-edit.component.css'
})
export class UsersEditComponent {
  usersEditForm!: FormGroup;
  id: number = 0;
  cargando: boolean = true;
roles: Rol[] = []
 constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UsersService
 ) {}

 ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadUser();
    this.initForm();
    this.userService.indexroles().subscribe(roles => {
      this.roles = roles;
   });
   
 }

 private initForm(): void {
    this.usersEditForm = this.formBuilder.group({
      name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        rol: ['', Validators.required],
        
      });
 }  

 passwordMatchValidator(group: FormGroup) {
      const password = group.get('password')?.value;
      const password_confirmation = group.get('password_confirmation')?.value;
      return password === password_confirmation ? null : { mismatch: true };
    }


 private loadUser(): void {
  if (this.id) {
     this.userService.getUserById(this.id).subscribe((user: User) => {
       this.usersEditForm.patchValue({
         name: user.name,
         email: user.email,
         rol: user.rol,
       });
       this.cargando = false;
     });
  }
 }

 onSubmit(): void {
    if (this.usersEditForm.valid) {
      console.log(this.usersEditForm.value)
      this.userService.updateUser(this.id, this.usersEditForm.value).subscribe(
        response=>{
          console.log('usuario editado con exito');
      alert('Informacion actualizada con exito');
      this.router.navigate(['/users/index']);
        },
        error => console.error('Error al editar:', error)
      );
    }
    else{
      console.log('formulario invalido');
      console.log(this.usersEditForm.value)
    }
 }
}