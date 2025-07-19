import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'partsFilter',
  standalone: false
})
export class PartsFilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
