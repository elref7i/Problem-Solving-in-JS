function getAverage(marks) {
  // let sum = 0;
  // if (marks.length === 0) {
  //   return null;
  // }
  // for (let i = 0; i < marks.length; i++) {
  //   sum += marks[i];
  // }
  // return Math.floor(sum / marks.length);

  return Math.floor(marks.reduce((acc, cur) => acc + cur) / marks.length);
}
console.log(getAverage([90, 80, 76, 60, 50]));
