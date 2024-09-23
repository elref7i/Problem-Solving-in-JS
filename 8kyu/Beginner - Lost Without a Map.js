function maps(x) {
  // for (let i = 0; i < x.length; i++) {
  //   x.splice(i, 1, x[i] * 2);
  // }
  // return x;
  return x.map(x => x * 2);
}
console.log(maps([1, 2, 2]));
