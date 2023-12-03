/**
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
	You must write an algorithm with O(log n) runtime complexity.
	https://leetcode.com/problems/search-insert-position/
 */
export function searchInsert(nums: number[], target: number): number {
  const index = nums.findIndex((num) => num >= target);
  return index !== -1 ? index : nums.length;
}
// console.log(searchInsert([1, 3, 5, 6], 5)); //2
