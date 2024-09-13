function bonusTime(salary, bonus) {
  // your code here
  return bonus ? `£${salary * 10}` : `£${salary}`;
}
console.log(bonusTime(70, false));
