import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username: string, password: string) {
    // código de login
  }

  logout() {
    // código de logout
  }

  isLogged(): boolean {
    // Código para comprobar si hay un usuario logueado
    return true;
  }
}
