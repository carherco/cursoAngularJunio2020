import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplos-pipe',
  templateUrl: './ejemplos-pipe.component.html',
  styleUrls: ['./ejemplos-pipe.component.css']
})
export class EjemplosPipeComponent implements OnInit {

  numero1 = 124.6793;
  numero2 = 0.234;
  texto = 'Curso de Angular';
  fecha = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
