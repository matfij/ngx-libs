import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'preventOrphans',
  standalone: true,
})
export class PreventOrphansPipe implements PipeTransform {
  private readonly ORPHANS_PATTERN = /(\s+)((?:[\S][\s]+)+\S{2,})/g;

  transform(value: string, pattern = this.ORPHANS_PATTERN): string {
    return value.replaceAll(
      this.ORPHANS_PATTERN,
      (x) => ' ' + x.replace(' ', '').replace(' ', '&nbsp;')
    );
  }
}
