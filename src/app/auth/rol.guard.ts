import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { CookieService } from '../cookies.service';

@Injectable({
 providedIn: 'root',
})
export class RolGuard implements CanActivate {
 constructor(private cookieService: CookieService, private router: Router) {}

 canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const rol = parseInt(this.cookieService.getCookie('rol') || '0', 10);

    if (rol != 3) {
      return this.router.createUrlTree(['/cines/index']);
    }

    return true;
 }
}
