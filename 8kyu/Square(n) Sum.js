function squareSum(numbers) {
  return numbers.map(x => x ** 2).reduce((acc, cur) => acc + cur, 0);
}
console.log(squareSum([1, 2, 2]));
