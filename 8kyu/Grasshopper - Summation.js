var summation = function (num) {
  // let sum = 0; //3  0 > 0
  // for (num; num >= 0; num--) {
  //   sum += num;
  // }
  // return sum;
  return Array(num)
    .fill(true)
    .reduce((acc, cur, index) => acc + index + 1, 0);
};
console.log(summation(2));
