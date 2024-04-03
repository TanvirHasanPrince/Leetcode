/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]
 

Constraints:

1 <= n <= 8

*/

/**
 * @param {number} n
 * @return {string[]}
 */
/*
Rules
if n = 3
---> 3 open, 3 close=== Base case
---> close < open === When we are allowed to add closing parentheses 
Start with ( but not with )
*/


var generateParenthesis = function (n) {
  const result = [];
  const stack = [];
  stack.push({ str: "", open: 0, close: 0 });

  while (stack.length > 0) {
    const { str, open, close } = stack.pop();

    // Iteration 1: Initial configuration
    // Result: []
    // Stack: [{ str: '', open: 0, close: 0 }] (Pushed initial object)

    // Iteration 2: Add opening parenthesis
    // Result: []
    // Stack: [{ str: '(', open: 1, close: 0 }] (Popped initial object, added '(')
    //         [{ str: '', open: 2, close: 0 }] (Pushed new object with '(')

    // Iteration 3: Add closing parenthesis to first object
    // Result: []
    // Stack: [{ str: '()', open: 1, close: 1 }] (Popped top object, added ')')
    //         [{ str: '(', open: 2, close: 0 }] (Bottom object unchanged)

    // Iteration 4: Valid combination from second object
    // Result: ['()'] (Added first valid combination)
    // Stack: [{ str: '()', open: 1, close: 1 }] (Popped top object)
    //         [{ str: '()', open: 2, close: 1 }] (Updated bottom object with ')')

    // Iteration 5: Process remaining object (add closing parenthesis)
    // Result: ['()']
    // Stack: [{ str: '(', open: 2, close: 0 }] (Popped previous object)
    //         [{ str: '(())', open: 2, close: 2 }] (Updated object with ')')

    // Iteration 6: Valid combination from remaining object
    // Result: ['()','(())'] (Added second valid combination)
    // Stack: [] (Empty - Popped last object)

    // Termination: All combinations explored, algorithm finishes

    if (open === n && close === n) {
      result.push(str);
    } else {
      if (open < n) {
        stack.push({ str: str + "(", open: open + 1, close });
        //  init- { str: '(', open: 1, close: 0 }
        //  popped then added { str: '((', open: 2, close: 0 }
      }
      if (close < open) {
        stack.push({ str: str + ")", open, close: close + 1 });
      }
      //   { str: '()', open: 2, close: 1 }
      //   { str: '()', open: 2, close: 2 }
    }
  }

  return result;
};

/*
For n = 2

In the starting: 
result: []
stack: []


We push the initial object { str: '', open: 0, close: 0 } onto the stack.
result: []
stack: [
  { str: '', open: 0, close: 0 }
]

Since open (0) is less than n (2), we push a new object with an open parenthesis onto the stack.
result: []
stack: [
  { str: '(', open: 1, close: 0 }
]


We pop the next object from the stack.
result: []
stack: []
popped: { str: '(', open: 1, close: 0 }

Since open (1) is still less than n (2), we push two new objects onto the stack, one with an open parenthesis and one with a closed parenthesis.


result: []
stack: [
  { str: '()', open: 1, close: 1 },
  { str: '((', open: 2, close: 0 }
]


We continue popping objects from the stack and pushing new objects until we reach a valid combination.
result: ['()()']
stack: [
  { str: '(())', open: 2, close: 2 }
]


Since open (2) and close (2) are both equal to n (2), we add the string '(())' to the result array.
result: ['()()', '(())']
stack: []


The stack is now empty, so the while loop terminates, and we return the result array containing all valid combinations of well-formed parentheses.
result: ['()()', '(())']

*/
