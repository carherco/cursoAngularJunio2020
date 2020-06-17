import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-users-detalle',
  templateUrl: './users-detalle.component.html',
  styleUrls: ['./users-detalle.component.css']
})
export class UsersDetalleComponent implements OnInit {

  @Input()
  user: User;

  @Output()
  deleteEvent: EventEmitter<User> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  delete() {
    // no tengo acceso al array para borrar
    this.deleteEvent.emit(this.user);
  }

}
