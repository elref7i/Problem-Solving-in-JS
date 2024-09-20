function grow(x) {
  return x.reduce((acc, cur) => acc * cur);
}
console.log(grow([1, 2, 3, 4]));
