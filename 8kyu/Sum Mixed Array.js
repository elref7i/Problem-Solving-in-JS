function sumMix(x) {
  // return x.filter(e => Number(e));
  return x.map(Number).reduce((acc, cur) => acc + cur);
}

console.log(sumMix(['1', 2, 3, '4']));
