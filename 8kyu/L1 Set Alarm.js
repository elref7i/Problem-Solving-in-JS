function setAlarm(employed, vacation) {
  return employed === true && vacation === false ? true : false;
}
console.log(setAlarm(true, true));
