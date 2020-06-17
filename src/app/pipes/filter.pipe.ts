import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(users: any) {
    console.log('Pipe');
    return users.filter(
      user => user.phone
    );
  }

}
