function twoDecimalPlaces(n) {
  // return Number(n.toFixed(2));
  return Math.round(n * 100) / 100;
}
console.log(twoDecimalPlaces(5.5589));
