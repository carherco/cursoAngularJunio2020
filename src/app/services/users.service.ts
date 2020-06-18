import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { USERS } from '../data/users';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  urlApi = environment.urlBack + 'users';
  users;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<User>> {
    return this.http.get<Array<User>>(this.urlApi);
  }

  getFiltered(filter = ''): Observable<Array<User>> {
    // GET: https://jsonplaceholder.typicode.com/users?email=Sincere@april.biz
    return this.http.get<Array<User>>(this.urlApi + '?' + filter);
  }

  getById(id: number): User {
    // GET: https://jsonplaceholder.typicode.com/users/3
    return USERS.find(
      u => u.id === id
    );
  }

  add(user: User) {
    // POST: https://jsonplaceholder.typicode.com/users
    USERS.push(user);
    return true;
  }

}
