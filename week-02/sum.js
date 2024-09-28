// ary: number array
import assert from "node:assert";
function sum1(ary) {
  // Array.prototype.reduce()
  // ref: https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
  return ary.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}
// 挑戰題: 有幾種寫法？
function sum2(ary) {
  // 遞迴 & 切片
  if (ary.length == 0) {
    return 0;
  }
  return ary[0] + sum2(ary.slice(1));
}
assert.strictEqual(sum1([1, 5, 3, 2]), 11);
assert.strictEqual(sum2([1, 5, 3, 2]), 11);

// 挑戰題: 如果 sum 函式的 input 是 n，然後要回傳 1 + 2 + 3 + … + n 的話，一樣不能用 for, while 寫，要怎麼做？
function sum3(n) {
  // 遞迴
  if (n == 0) {
    return 0;
  }
  return n + sum3(n - 1);
}
function sum4(n) {
  //公式解
  return ((1 + n) * n) / 2;
}

assert.strictEqual(sum3(10), 55);
assert.strictEqual(sum4(10), 55);