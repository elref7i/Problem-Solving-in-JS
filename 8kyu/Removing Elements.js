function removeEveryOther(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr.splice(i + 1, 1);
  }
  return arr;
}
console.log(removeEveryOther(['Keep', 'Remove', 'Keep', 'Remove', 'Keep']));
