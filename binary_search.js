const findNum = (arr, target) => {
  arr.sort();

  let left = 0;
  let right = arr.length-1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] < target) 
      left = mid + 1;
    else if (arr[mid] > target) 
      right = mid - 1;
    else
      return mid;
  }

  return -1;
}

console.log(findNum([2,3,5,67,2,1], 67));