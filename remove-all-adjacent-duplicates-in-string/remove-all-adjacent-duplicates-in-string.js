const removeDuplicates = (s) => {
  let stack = [];

  for (char of s) {
    if (stack.length && stack[stack.length - 1] === char) {
      stack.pop();
      continue;
    }
    stack.push(char);
  }

  return stack.join("");
}
