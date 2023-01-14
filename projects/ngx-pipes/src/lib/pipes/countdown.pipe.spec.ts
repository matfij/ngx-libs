import { CountdownPipe } from './countdown.pipe';

describe('CountdownPipe', () => {
  let pipe: CountdownPipe;

  beforeEach(() => {
    pipe = new CountdownPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('correctly counts down to 0 with default parameters', async () => {
    const startValue = 10;
    const transformSpy = spyOn(pipe, 'transform').and.callThrough();

    pipe.transform(startValue).subscribe((val) => {
      expect(val).toEqual(startValue);
    });

    expect(transformSpy).toHaveBeenCalledOnceWith(startValue);
  });
});
