/*
You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

Evaluate the expression. Return an integer that represents the value of the expression.

Note that:

The valid operators are '+', '-', '*', and '/'.
Each operand may be an integer or another expression.
The division between two integers always truncates toward zero.
There will not be any division by zero.
The input represents a valid arithmetic expression in a reverse polish notation.
The answer and all the intermediate calculations can be represented in a 32-bit integer.
 

Example 1:

Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9
Example 2:

Input: tokens = ["4","13","5","/","+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6
Example 3:

Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
Output: 22
Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22
 

Constraints:

1 <= tokens.length <= 104
tokens[i] is either an operator: "+", "-", "*", or "/", or an integer in the range [-200, 200].
*/

/**
 * @param {string[]} tokens
 * @return {number}
 */
/*
let's visualize the process with an example. We'll use the input tokens = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"] from the problem statement.
*/
var evalRPN = function (tokens) {
  const stack = [];
  /*
Initial stack: []
"10" is a number, so we push it onto the stack: [10]
"6" is a number, so we push it onto the stack: [10, 6]
"9" is a number, so we push it onto the stack: [10, 6, 9]
"3" is a number, so we push it onto the stack: [10, 6, 9, 3]

*"+" is an operator, so we:
Pop 3 and 9 from the stack: a = 9, b = 3
Compute 9 + 3 = 12
Push 12 onto the stack: [10, 6, 12]

"-11" is a number, so we push it onto the stack: [10, 6, 12, -11]

*"*" is an operator, so we:
Pop -11 and 12 from the stack: a = 12, b = -11
Compute 12 * -11 = -132
Push -132 onto the stack: [10, 6, -132]

*"/" is an operator, so we:
Pop -132 and 6 from the stack: a = 6, b = -132
Compute Math.trunc(6 / -132) = 0 (integer division with truncation towards zero)
Push 0 onto the stack: [10, 0]

*"*" is an operator, so we:
Pop 0 and 10 from the stack: a = 10, b = 0
Compute 10 * 0 = 0
Push 0 onto the stack: [0]

"17" is a number, so we push it onto the stack: [0, 17]

*"+" is an operator, so we:
Pop 17 and 0 from the stack: a = 0, b = 17
Compute 0 + 17 = 17
Push 17 onto the stack: [17]

"5" is a number, so we push it onto the stack: [17, 5]

*"+" is an operator, so we:
Pop 5 and 17 from the stack: a = 17, b = 5
Compute 17 + 5 = 22
Push 22 onto the stack: [22]
At this point, we've processed all the tokens, and the final result 22 is the only element left on the stack.

The function returns stack.pop(), which is 22, as expected for this input.
*/
  for (const token of tokens) {
    if (!isNaN(token)) {
      stack.push(parseInt(token));
    } else {
      const b = stack.pop();
      const a = stack.pop();
      /*
Let's break it down:

*if (!isNaN(token)) {This condition checks if the current token is a valid number. The negation !isNaN(token) essentially checks if token is a valid number.
  !The isNaN() function in JavaScript returns true if the argument is not a valid number.

*stack.push(parseInt(token));If the token is a valid number, it is converted to an integer using parseInt(token).The resulting integer value is then pushed onto the stack using the push method.} else {If the token is not a valid number, it means it is an operator (+, -, *, or /).

*const b = stack.pop();This line pops (removes) the top element from the stack and assigns it to the variable b.The popped element represents the second operand for the arithmetic operation.

*const a = stack.pop();This line pops the new top element from the stack and assigns it to the variable a.The popped element represents the first operand for the arithmetic operation.
*/
      switch (token) {
        case "+":
          stack.push(a + b);
          break;
        case "-":
          stack.push(a - b);
          break;
        case "*":
          stack.push(a * b);
          break;
        case "/":
          stack.push(Math.trunc(a / b));
          //*The Math.trunc() static method returns the integer part of a number by removing any fractional digits.
          break;
      }
    }
  }

  return stack.pop();
};
