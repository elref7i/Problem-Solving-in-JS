function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}
console.log(arrayPlusArray([1, 2, 3], [3, 4, 5]));
