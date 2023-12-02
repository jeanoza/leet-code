function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";
  if (strs.length === 1) return strs[0];
  let res = "";
  // for (let i = 0; i < strs[0].length; ++i) {
  //     let currentIsTrue = undefined;
  //     for (let j = 0; j < strs.length - 1; ++j) {
  //         if (currentIsTrue !== false && strs[j][i] === strs[j + 1][i]) currentIsTrue = true;
  //         else break;
  //         console.log(strs[j], "", currentIsTrue, strs[j][i], strs[j + 1][i])
  //         if (j === strs.length - 2 && currentIsTrue) res += strs[j][i];
  //     }
  //     if (currentIsTrue === undefined) break;
  // }

  for (let i = 0; i <= strs[0].length; ++i) {
    let current = strs[0].slice(0, i);
    if (strs.filter((str) => str.startsWith(current)).length === strs.length)
      res = current;
    else break;
  }
  return res;
}
