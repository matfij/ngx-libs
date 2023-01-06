import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'preventOrphans',
})
export class PreventOrphansPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return value;
  }
}
