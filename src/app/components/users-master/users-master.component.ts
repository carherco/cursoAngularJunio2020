import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-master',
  templateUrl: './users-master.component.html',
  styleUrls: ['./users-master.component.css']
})
export class UsersMasterComponent implements OnInit {

  users: Array<User> = [];
  userSelected: User;
  newUser: User;
  nextId = 11;
  message = '';

  constructor(private service: UsersService) {
    this.newUser = new User(this.nextId);
    this.users = this.service.getAll();
  }

  ngOnInit(): void {
  }

  addUser() {
    this.service.add(this.newUser);
    this.users.push(this.newUser);
    this.users = [...this.users];
    this.newUser = new User(++this.nextId);
  }

  selectUser(user: User) {
    // this.userSelected = user;
    this.userSelected = {...user};
  }

  deleteUser(user: User) {
    this.users = this.users.filter(
      u => u.id !== user.id
    );
  }

}
