/**
 * https://leetcode.com/problems/plus-one/
 * You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer.
    The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
    Increment the large integer by one and return the resulting array of digits.
 */
export function plusOne(digits: number[]): number[] {
  const strNum = digits.join("");
  const numPlusOne = BigInt(strNum) + BigInt(1);
  return String(numPlusOne)
    .split("")
    .map((num) => Number(num));

  // let len = digits.length
  // let current = digits[len - 1];
  // let i = len - 1;

  // while (current === 9) {
  //     digits[i] = 0;
  //     current = digits[--i];
  // }
  // if (i === -1) {
  //     return [1, ...digits];
  // }
  // digits[i] += 1;
  // return digits;
}
