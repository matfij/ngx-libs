import { ToRomanPipe } from './to-roman.pipe';

describe('ToRomanPipe', () => {
  let pipe: ToRomanPipe;

  beforeEach(() => {
    pipe = new ToRomanPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('correctly maps arabic to roman values', () => {
    const arabicValues = [-5, 4, 19, 101, 555, 2930, 4000];
    const expectedResults = [
      'I',
      'IV',
      'XIX',
      'CI',
      'DLV',
      'MMCMXXX',
      'MMMCMXCIX',
    ];

    arabicValues.forEach((_, ind) => {
      const result = pipe.transform(arabicValues[ind]);

      expect(result).toEqual(expectedResults[ind]);
    });
  });
});
