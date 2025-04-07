import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'state'
})
export class StatePipe implements PipeTransform {

  // constructor(private ){}

  transform(id: number, ...args: unknown[]): unknown {
    return null;
  }

}
