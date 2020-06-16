import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  imagenes: Array<string> = [
    'https://mmtstock.com/wp-content/uploads/2017/09/P7040338.jpg',
    'https://mmtstock.com/wp-content/uploads/2017/09/P6290012.jpg',
    'https://mmtstock.com/wp-content/uploads/2015/08/IMG_0903150810.jpg',
    'https://mmtstock.com/wp-content/uploads/2017/12/P8310900.jpg',
    'https://mmtstock.com/wp-content/uploads/2017/12/P8310865.jpg',
    'https://mmtstock.com/wp-content/uploads/2017/12/P6290042.jpg',
    'https://mmtstock.com/wp-content/uploads/2017/11/P9031121.jpg',
    'https://mmtstock.com/wp-content/uploads/2018/02/P7041396.jpg'
  ];

  imagenCentral: string;
  indice = 0;
  tamanyo = 300;

  private intervalId;
  isPlaying: boolean;

  constructor() {
    this.isPlaying = false;
    this.imagenCentral = this.imagenes[this.indice];
  }

  ngOnInit(): void {
  }

  anteriorImagen() {
    this.indice--;
    this.imagenCentral = this.imagenes[this.indice];
  }

  siguienteImagen() {
    this.indice++;
    if (this.indice >= this.imagenes.length) {
      this.indice = 0;
    }
    this.imagenCentral = this.imagenes[this.indice];
  }

  seleccionarImagen(indice) {
    this.indice = indice;
    this.imagenCentral = this.imagenes[this.indice];
  }

  aumentar() {
    this.tamanyo += 50;
  }

  disminuir() {
    this.tamanyo -= 50;
  }

  play() {
    this.intervalId = setInterval( () => {
      this.siguienteImagen();
    } , 500);
    this.isPlaying = true;
  }

  stop() {
    clearInterval(this.intervalId);
    this.isPlaying = false;
  }

}
