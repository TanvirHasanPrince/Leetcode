/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

*/


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length % 2 !== 0) return false; //if size is odd its not balanced
  const stack = [];
  // Now, the stack looks like this: []

  /*
Lets assume the string looks like this: Input string: "({[]})"
First, (-- will go so in the stack } will get pushed
Staack = [)]
Then: {, so in the stack } will get pushed
Stack: [})]
Then: [, so in the stack ] will get pushed
Stack: []})]


Now, ] is the input, so it does not match anything, if it goes to default- then we pop the last value and see if it matches or not. In the stack, the last value is ]. So it matches ]. 
It will check and if matches then will pop the last element. 

Input string: "({[]})"

Initial stack: []

After '(': stack = [')']
After '{': stack = ['}', ')']
After '[': stack = [']', '}', ')']
After ']': stack = ['}', ')']
After '}': stack = [')']
After ')': stack = []

Final stack: []

    */
  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    switch (c) {
      case "(":
        stack.push(")");
        break;
      case "[":
        stack.push("]");
        break;
      case "{":
        stack.push("}");
        break;
      default:
        if (c !== stack.pop()) {
          return false;
        }
    }
  }

  return stack.length === 0;
};