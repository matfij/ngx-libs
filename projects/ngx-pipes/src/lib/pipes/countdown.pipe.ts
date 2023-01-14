import { Pipe, PipeTransform } from '@angular/core';
import { map, Observable, timer } from 'rxjs';

@Pipe({
  name: 'countdown',
  standalone: true,
})
export class CountdownPipe implements PipeTransform {
  private readonly COUNTDOWN_INTERVAL = 1000;
  private readonly STOP_AT_ZERO = true;

  transform(value: number): Observable<number> {
    return timer(0, this.COUNTDOWN_INTERVAL).pipe(
      map((val) => {
        let result = value - val;
        if (this.STOP_AT_ZERO && result < 0) result = 0;
        return result;
      })
    );
  }
}
