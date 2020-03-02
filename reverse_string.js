function reverseString(string = '') {
  return string
    .split('')
    .reverse()
    .join('');
}

function reverseString2(string = '') {
  let reversed = '';
  for (let char of string) {
    reversed = char + reversed;
  }

  return reversed;
}

const reverseString3 = (string = '') => {
  return string
    .split('')
    .reduce((a, c) => c + a, '');
}

console.log(reverseString("aaaaaabbbbbbbccccccdddddd"));
console.log(reverseString2("aaaaaabbbbbbbccccccdddddd"));
console.log(reverseString3("aaaaaabbbbbbbccccccdddddd"));
