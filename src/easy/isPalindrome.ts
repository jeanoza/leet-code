function isPalindrome(x: number): boolean {
  let current = String(x);
  for (let i = 0; i < current.length / 2; ++i) {
    if (current[i] !== current[current.length - 1 - i]) return false;
  }
  return true;
}

console.log(isPalindrome(121));
