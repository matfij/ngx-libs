import { Pipe, PipeTransform } from '@angular/core';
import { map, Observable, of, take, takeUntil, timer } from 'rxjs';

@Pipe({
  name: 'countdown',
  standalone: true,
})
export class CountdownPipe implements PipeTransform {
  private readonly COUNTDOWN_INTERVAL = 1000;
  private readonly STOP_AT_ZERO = true;

  transform(value: number): Observable<number> {
    let currentVal = value;

    return timer(0, this.COUNTDOWN_INTERVAL).pipe(
      map((val) => {
        currentVal = value - val;
        if (this.STOP_AT_ZERO && currentVal < 0) currentVal = 0;
        return currentVal;
      })
    );
  }
}
