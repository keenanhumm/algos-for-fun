// from: https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const seen = new Map();

  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i];
    if (seen.has(compliment)) return [seen.get(compliment), i];
    seen.set(nums[i], i);
  }
  return -1;
};
