import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'edadFormat'
})
export class EdadFormatPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(edad: number): string {
    if (edad === 1) {
      return edad + ' año';
    } else {
      return edad + ' años';
    }
  }

}

