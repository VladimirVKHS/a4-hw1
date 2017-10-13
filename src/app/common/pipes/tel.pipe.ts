import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tel'
})
export class TelPipe implements PipeTransform {

  transform(tel: string): string {
    return tel.substr(0, 5) + ' ' + tel.substr(5, 3) + ' ' + tel.substr(8);
  }

}
