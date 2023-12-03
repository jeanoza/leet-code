/**
 * https://leetcode.com/problems/length-of-last-word/description/
 * Given a string s consisting of words and spaces, return the length of the last word in the string.
    A word is a maximal 
    substring
    consisting of non-space characters only.
 */
export function lengthOfLastWord(s: string): number {
  const splitted = s.trim().split(" ");
  return splitted[splitted.length - 1].length;
}
