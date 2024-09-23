function sum(numbers) {
  'use strict';
  if (numbers.length < 0) {
    return 0;
  }
  return numbers.reduce((acc, cur) => acc + cur, 0);
}
console.log(sum([-2.398]));
