/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

*MinStack() initializes the stack object.
*void push(int val) pushes the element val onto the stack.
*void pop() removes the element on the top of the stack.
*int top() gets the top element of the stack.
*int getMin() retrieves the minimum element in the stack.
!You must implement a solution with O(1) time complexity for each function.

 

Example 1:

Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
 

Constraints:

-231 <= val <= 231 - 1
Methods pop, top and getMin operations will always be called on non-empty stacks.
At most 3 * 104 calls will be made to push, pop, top, and getMin.



*/

//!MinStack() initializes the stack object.
var MinStack = function() {
    this.stack = []; //--- So, I have created a stack
    this.minStack = []; // Auxiliary stack to keep track of the minimum element
};

/*
* The stack I am getting will look like this: 
stack: [-2]
minStack: [-2]
*/

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    // Update the minStack with the new minimum value if applicable
    if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(val);
    }
};
/*
MinStack.prototype.push-- This will add a method with the MinStack object. The job of this object is to push a value. 
* this.stack.push(val);-- Whateve value you get just push it to the stack. 
* this.minStack.length === 0 means, if the minStack has nothing or val <= this.minStack[this.minStack.length - 1] means the value I am trying to push if it is less than the value on the minStack's last value (this.minsStack.length-1== is the last valuse of that stack) then I will push the value that I am getting to the "minStack"

*/

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const popped = this.stack.pop();
    // If the popped element is the minimum, remove it from the minStack
    if (popped === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
    }
};
/*
*Here, I am removing the value from the top of the stack. 
* If the popped === this.minStack[this.minStack.length - 1] means if the popped is equal to the minimum value in the stack then I am going to pop that too. 
*/

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/*
*Return the top value of the stack. Just return the last value:  return this.stack[this.stack.length - 1];
*/

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
};
/*
* The stack I am getting will look like this: 
stack: [-2]
minStack: [-2]
* As I am only saving the miniMum value in the stack. I will just return this to get the minimum Stack. 
*/

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
