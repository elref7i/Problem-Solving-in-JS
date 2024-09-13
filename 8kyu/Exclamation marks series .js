function remove(string) {
  //coding and coding....
  var listString = string.split('');
  if (listString.at(-1) === '!') {
    listString.pop();
    return listString.join('');
  }
  return listString.join('');
}
console.log(remove('refai'));
