import { Pipe, PipeTransform } from '@angular/core';
import { map, Observable, of, take, takeUntil, timer } from 'rxjs';

@Pipe({
  name: 'countdown',
  standalone: true,
})
export class CountdownPipe implements PipeTransform {
  private readonly COUNTDOWN_INTERVAL = 1000;
  private readonly STOP_AT_ZERO = true;

  transform(
    value: number,
    interval: number = this.COUNTDOWN_INTERVAL,
    stopAtZero: boolean = this.STOP_AT_ZERO
  ): Observable<number> {
    return timer(0, interval).pipe(
      map((val) => {
        let result = value - val;
        if (stopAtZero && result < 0) result = 0;
        return result;
      })
    );
  }
}
