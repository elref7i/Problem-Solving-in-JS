function descendingOrder(n) {
  //* sol 1
  // return Number(n.toString().split('').sort().reverse().join(''));
  //* sol 2
  return Number(
    n
      .toString()
      .split('')
      .sort((a, b) => b - a)
      .join('')
  );
}

console.log(descendingOrder(42145));
