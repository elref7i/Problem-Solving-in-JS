function lovefunc(flower1, flower2) {
  return (flower1 % 2 === 0 && flower2 % 2 === 1) ||
    (flower2 % 2 === 0 && flower1 % 2 === 1)
    ? true
    : false;
}

console.log(lovefunc(671, 100));
