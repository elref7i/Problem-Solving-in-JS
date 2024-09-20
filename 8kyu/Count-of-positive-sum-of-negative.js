function countPositivesSumNegatives(input) {
  //   let sum = 0;
  //   let count = 0;
  //   for (let i = 0; i < input.length; i++) {
  //
  //     if (input[i] >= 0) {
  //       count++;
  //     } else {
  //       sum += input[i];
  //     }
  //   }
  //   return [count, sum];
  if (input.length === 0 && input === null) {
    return input;
  }
  let countPositiveNumber = input.filter(x => x > 0).length;
  let sumNegaiveNumber = input
    .filter(x => x < 0)
    .reduce((acc, cur) => acc + cur);
  return [countPositiveNumber, sumNegaiveNumber];
}
console.log(
  countPositivesSumNegatives([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
);
