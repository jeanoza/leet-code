/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 */

function removeDuplicates(nums: number[]): number {
  const tmp = [...new Set(nums)];
  nums.length = 0;
  nums.push(...tmp);
  return nums.length;
}
