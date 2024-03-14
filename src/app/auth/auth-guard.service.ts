import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
 providedIn: 'root',
})
export class AuthGuard implements CanActivate {

 constructor(private cookieService: CookieService, private router: Router) {}

 canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = this.cookieService.get('token'); // Asume que el token se guarda con la clave 'token'
    if (token) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
 }
}
