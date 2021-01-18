// from: https://leetcode.com/problems/3sum

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const result = [];
  if (nums.length < 3) return result;
  nums.sort((a, b) => a - b);
  
  // adjust as needed
  const target = 0;
  
  for (let i = 0; i < nums.length - 2; i++) {
      // skip duplicates
      if (i > 0 && nums[i] === nums[i-1]) continue;
      // bypass cases where smallest element alone is greater than target
      if (nums[i] > target) break;
      
      let j = i + 1;
      let k = nums.length - 1;
      let sum = nums[i] + nums[j] + nums[k];
      
      while(j < k) {
          if (sum === target) {
              // found match
              result.push([nums[i], nums[j], nums[k]]);
              // skip duplicates
              while(nums[j + 1] === nums[j]) j++;
              while(nums[k - 1] === nums[k]) k--;
              
              j++;
              k--;
          } else if (sum > target) {
              k--;
          } else {
              j++;
          }
          // update sum
          sum = nums[i] + nums[j] + nums[k];
      } 
  }
  
      
  return result;
};