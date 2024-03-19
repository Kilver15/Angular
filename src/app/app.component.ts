import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service'; 
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";

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

 constructor(private authService: AuthService) {}

 ngOnInit(): void {
    this.authService.userId$.subscribe(userId => {
      this.userId = userId;
      // Aquí puedes agregar lógica adicional basada en el ID del usuario
    });
 }

 logOut(): void{

 }
}
