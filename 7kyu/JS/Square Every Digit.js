function squareDigits(num) {
  let compalteSquare = num
    .toString()
    .split('')
    .map(x => Number(x ** 2))
    .join('');
  return Number(compalteSquare);
}
console.log(squareDigits(9119));
