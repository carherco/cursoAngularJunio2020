import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent implements OnInit {

  user: User;
  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router
    ) {
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     const id = +params.id;
    //     console.log(params);
    //     this.user = this.usersService.getById(id);
    //   }
    // );

    const id = +this.route.snapshot.params.id;
    this.user = this.usersService.getById(id);
    console.log(this.user);

    // this.user = new User();
  }

  ngOnInit(): void {
  }

  onSubmit() {

  }

  goToList() {
    this.router.navigate(['/users/master/']);
  }

  hasUnsavedChanges(): boolean {
    return true;
  }

}
