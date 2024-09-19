// main.js
// TODO 以 Module 的方式匯入，例如:
import Stack from "./stack.js";
import assert from "node:assert";

// TODO: 應該還要做哪些測試，以驗證自己開發的 stack 是沒有問題的？
let stack = new Stack();
stack.print();
assert.strictEqual(stack.isEmpty(), true);
assert.strictEqual(stack.peek(), null); // check if stack is empty, someone want to peek
assert.strictEqual(stack.pop(), null); // check if stack is empty, someone want to pop
assert.strictEqual(stack.size(), 0);

stack.push(5);
stack.print();
assert.strictEqual(stack.peek(), 5);
assert.strictEqual(stack.size(), 1);

stack.push(8);
stack.print();
assert.strictEqual(stack.peek(), 8);
assert.strictEqual(stack.size(), 2);

stack.clear();
stack.print();
assert.strictEqual(stack.isEmpty(), true);
assert.strictEqual(stack.size(), 0);
