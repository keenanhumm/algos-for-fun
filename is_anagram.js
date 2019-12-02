const isAnagram = (first = '', second = '') => {
  if (first.length !== second.length) {
    return false;
  };
  const lookup = {}; 
  for(let i=0; i < first.length; i++) {
    const currentChar = first.charAt(i);
    lookup[currentChar] = lookup[currentChar] ? lookup[currentChar] + 1 : 1;
  }
  for(i = 0; i < second.length; i++) {
    const currentChar = second.charAt(i);
    if(!lookup[currentChar] || lookup[currentChar] === 0) {
      return false;
    }
    lookup[currentChar] = lookup[currentChar] - 1;
  }

  return true;
}

console.log(isAnagram('tttt', 'ttt'));