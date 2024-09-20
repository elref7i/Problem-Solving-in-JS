function isPalindrome(x) {
  let stringReverse = x.split('').reverse().join('').toUpperCase();
  return x.toUpperCase() === stringReverse ? true : false;
}
console.log(isPalindrome('madam'));
