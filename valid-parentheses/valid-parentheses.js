const isValid = (s) => {
  let stack = [];

  for (let c of s) {
    if (c === "(") {
      stack.push(")");
    } else if (c === "[") {
      stack.push("]");
    } else if (c === "{") {
      stack.push("}");
    } else if (stack.length === 0 || stack.pop() !== c) {
      return false;
    }
  }

  return stack.length === 0;
}

console.log(isValid("()([]{})"));
console.log(isValid("(){]{}"));
