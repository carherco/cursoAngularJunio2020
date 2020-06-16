import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exp'
})
export class ExpPipe implements PipeTransform {

  transform(base: number, exponente: number): number {
    return base ** exponente;
  }

}

// @Pipe({
//   name: 'filter'
// })
// export class FilterPipe implements PipeTransform {

//   transform(array: any[], campo: string, value: any): any[] {
//     return ....
//   }

// }
