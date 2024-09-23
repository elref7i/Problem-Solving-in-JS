function fakeBin(x) {
  return x
    .split('')
    .map(x => (Number(x) < 5 ? 0 : 1))
    .join('');
}
console.log(fakeBin('561891550'));
