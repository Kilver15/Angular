import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service'; 
import { CookieService } from './cookies.service';
import { LoginService } from './login/login.service';
import {RouterLink, RouterLinkActive, RouterOutlet, Router} from "@angular/router";

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 standalone: true,
 imports: [RouterOutlet,RouterLink,RouterLinkActive, CommonModule],
 styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 title = 'Cines';
 userId: number | null = null;
 hasAuthToken: boolean = false;

 constructor(private authService: AuthService,
  private cookieService: CookieService,
  private router: Router,
  private loginService: LoginService) {}

 ngOnInit(): void {
    this.authService.userId$.subscribe(userId => {
      this.userId = userId;
    });

    this.hasAuthToken = this.cookieService.getCookie('authToken') !== null;

 }

 logOut(event: Event) {
  event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

  this.loginService.logoutUser().subscribe(
    (response: any) => {
      console.log(response.message); // Asumiendo que la respuesta contiene una propiedad 'message'
      console.log('sesion cerrada');
      this.router.navigate(['/login']);
    },
    error => {
      console.error('Error al cerrar la sesión:', error);
    }
  );
}
}
