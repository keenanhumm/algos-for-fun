const isSameArraySquared = (array = [], prospectArray = []) => {
  if (array.length !== prospectArray.length) {
    return false;
  }
  let isSame = true;
  array.forEach(number => {
    if(!prospectArray.includes(number ** 2)){
      isSame = false;
    }
  });
  return isSame;
}

console.log(isSameArraySquared([1,2,3], [1,4,9]));