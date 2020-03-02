function isPalindrome(str = '') {
  for(let i = 0; i < Math.floor(str.length/2); i++) {
    if (str.charAt(i) !== str.charAt(str.length - i - 1)) { 
      return false;
    }
  }
  return true;
}

console.log(isPalindrome('racecar'));
console.log(isPalindrome('aasa'));