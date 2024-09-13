function switchItUp(number) {
  let ListNumber = [
    'Zero',
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
  ];

  switch (number) {
    case 0:
      return ListNumber[0];
      break;
    case 1:
      return ListNumber[1];
      break;
    case 2:
      return ListNumber[2];
      break;
    case 3:
      return ListNumber[3];
      break;
    case 4:
      return ListNumber[4];
      break;
    case 5:
      return ListNumber[5];
      break;
    case 6:
      return ListNumber[6];
      break;
    case 7:
      return ListNumber[7];
      break;
    case 8:
      return ListNumber[8];
      break;
    case 9:
      return ListNumber[9];
      break;
    default:
      return 'None';
  }
}

console.log(switchItUp(9));
