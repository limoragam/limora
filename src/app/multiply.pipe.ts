import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiply'
})
export class MultiplyPipe implements PipeTransform {

  transform(value: number): any {
    // Create an iterable object (an object is not usually iterable like Array would be) with numbers from 1 to value
    const iterableObject = {};
    iterableObject[Symbol.iterator] = function* () {
      let n = 0;
      while (n < value) {
        yield ++n;
      }
    };
    return iterableObject;
  }

}
