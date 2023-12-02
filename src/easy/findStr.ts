/**
 * https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
 */
function strStr(haystack: string, needle: string): number {
  for (let i = 0; i < haystack.length; ++i) {
    let j = 0;
    while (haystack[i + j] === needle[j]) {
      ++j;
      if (j === needle.length) return i;
    }
  }
  return -1;
}
