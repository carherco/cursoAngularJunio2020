import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  name = '';
  email = 'carherco@gmail.com';
  colorResaltado = 'green';

  constructor() {
    setTimeout( () => this.name = 'Marta', 5000);
  }

  ngOnInit(): void {
  }

  cambiarNombre(event) {
    console.log(event);
    this.name = 'Luis';
  }

  cambiarNombre2(event ) {
    console.log(event);
    this.name = event.target.value;
  }

}
