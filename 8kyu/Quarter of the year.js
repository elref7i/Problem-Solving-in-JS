const quarterOf = month => {
  // Your code here
  return month > 0 && month <= 3
    ? 1
    : month > 3 && month <= 6
    ? 2
    : month > 6 && month <= 9
    ? 3
    : month > 9 && month <= 12
    ? 4
    : '';
};
console.log(quarterOf(12));
