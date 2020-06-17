import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent implements OnInit {

  user: User;
  constructor(private usersService: UsersService) {
    this.user = this.usersService.getById(3);
    // this.user = new User();
  }

  ngOnInit(): void {
  }

  onSubmit() {

  }

}
