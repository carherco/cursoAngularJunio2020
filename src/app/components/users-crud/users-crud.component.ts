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
  constructor() { }

  ngOnInit(): void {
  }

}
