/**
 * https://leetcode.com/problems/two-sum/
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 *
 */

function twoSum(nums: number[], target: number): number[] {
  let i = 0;
  while (i < nums.length - 1) {
    let j = i + 1;
    while (j < nums.length) {
      if (nums[i] + nums[j] === target) return [i, j];
      ++j;
    }
    ++i;
  }
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));