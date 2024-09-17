function position(letter) {
  const arrayAlphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  // for (let i = 0; i < arrayAlphabet.length; i++) {
  //   if (arrayAlphabet[i].toLowerCase() === letter.toLowerCase()) {
  //     return `Position of alphabet: ${i + 1}`;
  //   }
  // }
  return `Position of alphabet: ${arrayAlphabet.indexOf(letter) + 1}`;
}
console.log(position('z'));
