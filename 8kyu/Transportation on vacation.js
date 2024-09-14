function rentalCarCost(d) {
  // Your solution here

  return d < 3 ? d * 40 : d >= 3 && d < 7 ? d * 40 - 20 : d * 40 - 50;
}
console.log(rentalCarCost(3));
