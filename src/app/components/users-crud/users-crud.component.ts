import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { USERS } from 'src/app/data/users';

@Component({
  selector: 'app-users-crud',
  templateUrl: './users-crud.component.html',
  styleUrls: ['./users-crud.component.css']
})
export class UsersCrudComponent implements OnInit {

  users: Array<User> = USERS;
  userSelected: User;
  newUser: User;
  nextId = 11;

  constructor() {
    this.newUser = new User(this.nextId);
  }

  ngOnInit(): void {
  }

  addUser() {
    this.users.push(this.newUser);
    this.users = [...this.users];
    this.newUser = new User(++this.nextId);
  }

  selectUser(user: User) {
    this.userSelected = {...user};
  }

  deleteUser(user: User) {
    this.users = this.users.filter(
      u => u.id !== user.id
    );
  }

}
