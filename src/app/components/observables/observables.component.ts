import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit, OnDestroy {

  subs2;
  subs3;

  constructor() { }

  ngOnInit(): void {

    // Creación de observable básico
    const Obs1$ = Observable.create(function (emmiter) {
      emmiter.next('Hello');
      emmiter.next('World');
      emmiter.complete();
    });

    Obs1$.subscribe(
      data => { console.log('Emisión:', data); },
      error => { console.log('Error:', error); },
      () => { console.log('Fin'); }
    );

    // Creación de observable "infinito"
    const Obs2$ = Observable.create(function(emmiter) {
      let value = 0;
      const interval = setInterval(() => {
        if (value % 2 === 0) {
          emmiter.next(value);
        }
        value++;

        if(value === 100) {
          emmiter.complete();
        }
      }, 1000);

      return () => {
        clearInterval(interval);
        console.log('Me he quedado sin observador');
      };
     });

    this.subs2 = Obs2$.subscribe( x => console.log('subs2:', x), () => {}, () => {}    );

    // unsubscribe after 10 seconds
    setTimeout( () => {
      this.subs2.unsubscribe();
    }, 10000);

    setTimeout(() => {
      this.subs3 = Obs2$.subscribe( x => console.log('subs3:', x) );
    }, 5000);

    // Son Observables fríos:
    // - Una instancia por cada subscripción
    // - El observable empieza en el momento de la subscripción
    // - Desuscribirse del observable para liberar memoria


    // Introducción a los operadores
    Obs1$.pipe(
      map( (x: string) => x.toUpperCase() )
    )
    .subscribe(
      function (x) { console.log('Emisión:', x); },
      function (e) { console.log('Error:', e); },
      function () { console.log('Fin'); }
    );

    Obs1$.pipe(
      map((x: string) => x.toUpperCase()),
      map((x: string) => x.split("").reverse().join(""))
    )
    .subscribe(
      function (x) { console.log('Emisión:', x); },
      function (e) { console.log('Error:', e); },
      function () { console.log('Fin'); }
    );

  }

  ngOnDestroy() {
    this.subs2.unsubscribe();
    this.subs3.unsubscribe();
  }

}
