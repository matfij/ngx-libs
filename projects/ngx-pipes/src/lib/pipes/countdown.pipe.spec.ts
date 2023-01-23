import { take, toArray } from 'rxjs';
import { CountdownPipe } from './countdown.pipe';

describe('CountdownPipe', () => {
  let pipe: CountdownPipe;

  beforeEach(() => {
    pipe = new CountdownPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('correctly counts down to 0 with default parameters', (done: DoneFn) => {
    const startValue = 3;
    const expectedResult = [3, 2, 1, 0];

    pipe
      .transform(startValue)
      .pipe(take(4), toArray())
      .subscribe((result) => {
        expect(result).toEqual(expectedResult);
        done();
      });
  });

  it('correctly counts down to 0 with default parameters', (done: DoneFn) => {
    const startValue = 3;
    const interval = 200;
    const stopAtZero = false;
    const expectedResult = [3, 2, 1, 0, -1, -2, -3];

    pipe
      .transform(startValue, interval, stopAtZero)
      .pipe(take(7), toArray())
      .subscribe((result) => {
        expect(result).toEqual(expectedResult);
        done();
      });
  });


});
