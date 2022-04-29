import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CanactivateService implements CanActivate {
  
  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if(sessionStorage.getItem('user') !== null) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}