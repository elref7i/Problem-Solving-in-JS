function noBoringZeros(n) {
  // * sol 1

  /*  let stringParam = String(n);
  while (stringParam.lastIndexOf(0) === stringParam.length - 1) {
    stringParam = stringParam.slice(0, stringParam.length - 1);
  }
  return Number(stringParam); */
  //* sol 2 *best

  let stringParam = String(n);
  while (stringParam.endsWith(0)) {
    stringParam = stringParam.slice(0, stringParam.length - 1);
  }
  return Number(stringParam);
}
console.log(noBoringZeros(105400));
