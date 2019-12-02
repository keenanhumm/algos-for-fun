const maxSubArraySum = (arr = [], n = 0) => {
  if (arr.length === 0 || n === 0) {
    return null;
  }
  let maxSum = -Infinity;
  for(let i = 0; i <= arr.length-n; i++) {
    let currentSum = 0;
    for(let j = i; j < i+n; j++) {
      currentSum += arr[j];
    }
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

const inputArrays = [
  [1,2,3,4],
  [2,2,2,4],
  [9,2,2],
  [-1,-2,-2]
];
const inputNs = [2,4,2,2];
const expectedResults = [7,10,11,-3]

inputArrays.forEach((input, index) => {
  console.log(maxSubArraySum(input, inputNs[index]) === expectedResults[index]);
});