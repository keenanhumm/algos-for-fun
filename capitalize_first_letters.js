function capitalizeFirstLetters(str = '') {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.substring(1))
    .join(' ')
}

console.log(capitalizeFirstLetters('hello there friend'));
console.log(capitalizeFirstLetters(''));
