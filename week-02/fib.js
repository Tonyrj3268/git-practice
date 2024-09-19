import assert from "node:assert";
function fib(n) {
  // TODO: implement fibonacci
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

assert.strictEqual(fib(0), 0);
assert.strictEqual(fib(1), 1);
assert.strictEqual(fib(5), 5);
assert.strictEqual(fib(10), 55);

// version of closure
function fib_closure(n) {
  let res = {};

  function fib(n) {
    if (n in res) {
      return res[n];
    }
    if (n <= 1) {
      return n;
    }
    res[n] = fib(n - 1) + fib(n - 2);
    return res[n];
  }
  return fib(n);
}

assert.strictEqual(fib_closure(0), 0);
assert.strictEqual(fib_closure(1), 1);
assert.strictEqual(fib_closure(5), 5);
assert.strictEqual(fib_closure(10), 55);
