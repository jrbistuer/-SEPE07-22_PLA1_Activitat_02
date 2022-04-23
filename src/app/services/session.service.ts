import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(
    private router: Router
    ) { }

  setUserMail(mail: string): void {
    sessionStorage.setItem('mail', mail);
  }

  getUserMail(): string {
    return sessionStorage.getItem('mail') || 'anónimo';
  }

  removeUser(): void {
    sessionStorage.removeItem('mail');
  }

  closeSession(): void {
    this.removeUser();
    this.router.navigate(['/login']);
  }

}
