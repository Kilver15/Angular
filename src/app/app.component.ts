import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from './login/login.service';
import {RouterLink, RouterLinkActive, RouterOutlet, Router} from "@angular/router";
import { ChangeDetectorRef } from '@angular/core';


@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 standalone: true,
 imports: [RouterOutlet,RouterLink,RouterLinkActive, CommonModule],
 styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 title = 'Cines';
 rolId: number = 0;
 hasAuthToken: boolean = false;

 constructor(
  private cookieService: CookieService,
  private router: Router,
  private loginService: LoginService,
  private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    const authToken = localStorage.getItem('authToken');
    this.hasAuthToken = !!authToken; // Convierte el valor a booleano
    if (this.hasAuthToken) {
      this.rolId = parseInt(this.cookieService.get('rol') || '0', 10);
    } else {
      this.rolId = 0;
    }
  }


  logOut(event: Event) {
    event.preventDefault();
    const confirmLogout = confirm('¿Estás seguro de que deseas cerrar la sesión?');
    if (confirmLogout) {
      this.loginService.logoutUser().subscribe(
        (response: any) => {
          console.log(response.message);
          localStorage.removeItem('authToken');
          this.cookieService.delete('authToken');
          this.cookieService.delete('rol');
          this.rolId = 0;
          this.changeDetectorRef.detectChanges();
          window.location.reload();
        },
        error => {
          console.error('Error al cerrar la sesión:', error);
        }
      );
    }
  }
}