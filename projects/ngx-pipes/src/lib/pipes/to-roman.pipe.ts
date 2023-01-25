import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toRoman',
  standalone: true,
})
export class ToRomanPipe implements PipeTransform {
  private readonly MIN = 1;
  private readonly MAX = 3999;

  transform(arabicValue: number): string {
    let romanValue = '';
    arabicValue = Math.max(this.MIN, Math.min(arabicValue, this.MAX));

    while (arabicValue > 0) {
      if (arabicValue >= 1000) {
        romanValue += 'M';
        arabicValue -= 1000;
      }
      else if (arabicValue >= 900) {
        romanValue += 'CM';
        arabicValue -= 900;
      }
      else if (arabicValue >= 500) {
        romanValue += 'D';
        arabicValue -= 500;
      }
      else if (arabicValue >= 400) {
        romanValue += 'CD';
        arabicValue -= 400;
      }
      else if (arabicValue >= 100) {
        romanValue += 'C';
        arabicValue -= 100;
      }
      else if (arabicValue >= 90) {
        romanValue += 'XC';
        arabicValue -= 90;
      }
      else if (arabicValue >= 50) {
        romanValue += 'L';
        arabicValue -= 50;
      }
      else if (arabicValue >= 40) {
        romanValue += 'XL';
        arabicValue -= 40;
      }
      else if (arabicValue >= 10) {
        romanValue += 'X';
        arabicValue -= 10;
      }
      else if (arabicValue >= 9) {
        romanValue += 'IX';
        arabicValue -= 9;
      }
      else if (arabicValue >= 5) {
        romanValue += 'V';
        arabicValue -= 5;
      }
      else if (arabicValue >= 4) {
        romanValue += 'IV';
        arabicValue -= 4;
      }
      else if (arabicValue >= 1) {
        romanValue += 'I';
        arabicValue -= 1;
      }
    }

    return romanValue;
  }
}
