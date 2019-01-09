// Detect a sequence of diffrent types of brackets and see if it is actually balanced. 
// There are three types of braces ( {}, (), [] ) and given a string with these different types return a boolean. 

let isBalanced = (str) => {
  let stack = [];

  let open = {
    '{': '}',
    '[': ']',
    '(': ')'
  };

  let closed = {
    '}': true,
    ']': true,
    ')': true
  }

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (open[char]) {
      stack.push(char);
    } else if (closed[char]) {
      if (open[stack.pop()] !== char) return false;
    }
  }
  return stack.length === 0;
}

console.log(isBalanced("[()]{}{[()()]()}"));  // returns true
console.log(isBalanced("[()]{}{[()()()}]"));  // returns false

