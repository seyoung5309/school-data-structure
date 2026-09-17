// let stack = [];

// stack.push(1);
// stack.push(2);

// console.log(stack);

// stack.pop();
// stack.pop();
// stack.pop();

// console.log(stack);

import { Stack } from "./Stack.mjs";

let stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);

// console.log(stack.pop().data);
// console.log(stack.pop().data);

// console.log(stack.peek());
// console.log(stack.peek());

console.log(" === 두번째 출력 === ");
stack.push("일");
stack.push("이");
stack.push("삼");
stack.push("사");

console.log(stack.peek().data);
stack.pop();
console.log(stack.peek().data);

console.log(`isEmpty : ${stack.isEmpty()}`);

stack.pop();
stack.pop();
stack.pop();

console.log(`isEmpty : ${stack.isEmpty()}`);
