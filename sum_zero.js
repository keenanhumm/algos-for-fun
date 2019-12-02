sumZero = (arr = []) => {
  if(arr.length < 2) {
    return undefined;
  }
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum < 0) {
      left++;
    } else {
      right--;
    }
  }

  return undefined;
}

const testCases = [
  {
    input: [-1, 0, 1],
    expected: [-1, 1]
  },
  {
    input: [-4, -3, -1, 0, 1, 4],
    expected: [-4, 4]
  },
  {
    input: [-5, -1, 0, 1],
    expected: [-1, 1]
  },
  {
    input: [-1, 0],
    expected: undefined
  }
];

testCases.forEach((test, index) => {
  const actual = sumZero(test.input);
  console.log("expected", test.expected);
  console.log("actual", actual);
})