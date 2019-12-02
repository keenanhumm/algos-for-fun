const countUniqueValues = (arr = []) => {
  if(arr.length === 0) {
    return 0;
  }
  if(arr.length === 1) {
    return 1;
  }

  let i = 0;
  for(let j = 1; j < arr.length; j++) {
    if(arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i+1;
}

const testCases = [
  {
    input: [1,2,3],
    expected: 3
  },
  {
    input: [1,1,1,1,2,3],
    expected: 3
  },
  {
    input: [1,2,3,4,4,4],
    expected: 4
  },
  {
    input: [1],
    expected: 1
  }
];

testCases.forEach(test => {
  if(countUniqueValues(test.input) === test.expected) {
    console.log('pass');
  } else {
    console.log('fail')
  }
});