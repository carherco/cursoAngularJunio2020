import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/model/User';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {

  user: User;
  userForm: FormGroup;

  constructor(private usersService: UsersService, private fb: FormBuilder) {
    this.user = this.usersService.getById(3);
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
    this.userForm = this.fb.group({
      name: [this.user.name, [Validators.required, Validators.minLength(8)] ],  // Esto se convierte en un FormControl
      username: this.user.username,
      email: '',
      address: this.fb.group({
        street: this.user.address.street,
        city: '',
        zipcode: ''
      })

    });

    this.userForm.valueChanges.subscribe(
      x => console.log(x)
    );

    const nameControl = this.userForm.get('name');
    nameControl.valueChanges.subscribe(
      x => console.log(x)
    );
  }

}
