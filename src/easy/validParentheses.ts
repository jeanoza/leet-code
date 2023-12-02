/**
 * https://leetcode.com/problems/valid-parentheses/
 */
function isValid(s: string): boolean {
  let stack = [];

  for (let i = 0; i < s.length; ++i) {
    let current = s[i];

    if (stack.length && stack[stack.length - 1] === "(" && current === ")")
      stack.pop();
    else if (stack.length && stack[stack.length - 1] === "{" && current === "}")
      stack.pop();
    else if (stack.length && stack[stack.length - 1] === "[" && current === "]")
      stack.pop();
    else stack.push(current);
  }
  return stack.length === 0;
}

console.log(isValid("([{}])"));
console.log(isValid("([{])}"));
