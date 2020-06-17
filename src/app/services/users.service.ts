import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { USERS } from '../data/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users = USERS;
  constructor() { }

  getAll(): User[] {
    return this.users;
  }

  getById(id: number): User {
    return this.users.find(
      u => u.id === id
    );
  }

  add(user: User) {
    this.users.push(user);
    return true;
  }

}
