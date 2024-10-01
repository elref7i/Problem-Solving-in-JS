function feast(beast, dish) {
  return (
    beast.slice(0, 1) === dish.slice(0, 1) &&
    beast.slice(beast.length - 1) === dish.slice(dish.length - 1)
  );
}
console.log(feast('chickadee', 'chocolate cake'));
