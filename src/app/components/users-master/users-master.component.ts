import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { User } from 'src/app/model/User';
import { UsersService } from 'src/app/services/users.service';
import { of, from, fromEvent, Observable } from 'rxjs';
import { map, filter, debounceTime, tap, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

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
  loading = false;

  @ViewChild('search', {static: true})
  email: ElementRef;

  constructor(private service: UsersService, private router: Router) {
    this.newUser = new User(this.nextId);
    this.loading = true;
    this.service.getAll().subscribe(
      respuestaBack => { this.users = respuestaBack; this.loading = false;}
    );
  }

  getUsers(email?: string): Observable<Array<User>> {
    let filter = '';
    if (email) {
      filter = 'email=' + email;
    }
    return this.service.getFiltered(filter);
  }

  ngOnInit() {

    // let observable1 = of([6,7,8]);
    // let observable2 = from([6,7,8]);

    const search$ = fromEvent(this.email.nativeElement, 'keyup');
    search$
    .pipe(
      tap(x => console.log('Elemento original:', x)),
      map( (x: any) => x.target.value),
      tap(x => console.log('Después de .map((x: any) => x.target.value):', x)),
      filter( x => x.length > 3),
      tap(x => console.log('Después de .filter(x => x.length > 3)', x)),
      debounceTime(500),
      tap(x => console.log('Después de .debounceTime(500)', x)),
      distinctUntilChanged(),
      tap(x => console.log('Después de .distinctUntilChanged()', x)),
      switchMap( valueInput => this.getUsers(valueInput) )
    //    //tap(x => console.log('Después de .switchMap((x) => this.getHeroes(x))', x))
    )
    .subscribe(
      (respuestaBack: Array<User>) => this.users = respuestaBack
    );
    // .subscribe(
    //   valueInput => {
    //     this.getUsers(valueInput).subscribe(
    //       respuestaBack => this.users = respuestaBack
    //     );
    //   }
    // );

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

  goToEdit(user: User) {
    this.router.navigate(['/users/edit/' + user.id]);
  }

}
