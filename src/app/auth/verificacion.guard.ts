import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { CookieService } from '../cookies.service';

@Injectable({
 providedIn: 'root',
})
export class VerificacionGuard implements CanActivate {
 constructor(private cookieService: CookieService, private router: Router) {}

 canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const hasSanctToken = this.cookieService.getCookie('sanctToken') !== null;

    if (!hasSanctToken) {
      // Redirige al usuario a la página de login si no tiene sanctToken
      return this.router.createUrlTree(['/login']);
    }

    return true;
 }
}
