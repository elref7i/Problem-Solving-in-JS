function findSmallestInt(arr) {
  // return Math.min(...arr);
  return arr.sort((a, b) => a - b)[0];
}
console.log(findSmallestInt([34, 15, 88, 2]));
