import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { VerificacionService } from './verificacion.service';
import { CookieService } from '../cookies.service';


@Component({
 selector: 'app-verificacion',
 templateUrl: './verificacion.component.html',
 styleUrls: ['./verificacion.component.css'],
 standalone: true,
 imports: [ReactiveFormsModule, CommonModule, RouterLink, RouterLinkActive],
 animations: [
  trigger('fadeInOut', [
    state('in', style({ opacity: 1 })),
    transition(':enter', [
      style({ opacity: 0 }),
      animate('500ms', style({ opacity: 1 }))
    ]),
    transition(':leave', [
      animate('500ms', style({ opacity: 0 }))
    ])
  ])
]
})
export class VerificacionComponent implements OnInit {
  authForm!: FormGroup

 constructor(private formBuilder: FormBuilder, 
  private router: Router,
  private verificacionService: VerificacionService,
  private cookieService: CookieService) { }

  ngOnInit(): void {
    this.authForm = this.formBuilder.group({
      code: ['', [Validators.required,Validators.minLength(6), Validators.maxLength(6)]],
    });
  }

 onSubmit() {
    if (this.authForm.valid) {
      if (!this.authForm.get('code')?.value){
        alert('Por favor ingresa un codigo valido');
      }
      console.log(this.authForm.value);
      
      const code = this.authForm.get('code')?.value;
      console.log('Enviando código:', code);
      this.verificacionService.verifyCode(code).subscribe(
        data => {
          console.log('Código verificado exitosamente', data);
          this.cookieService.setCookie('authToken', data.token, 1);

         // this.router.navigate(['/dashboard']);
        },
        error => {
          // Maneja el error aquí
          console.error('Error al verificar el código', error);
        }
      );
    }
 }
}
