function updateLight(current) {
  //your code here!
  return current === 'green'
    ? 'yellow'
    : current === 'yellow'
    ? 'red'
    : 'green';
}
console.log(updateLight('yellow'));
