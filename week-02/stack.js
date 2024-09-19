// stack.js
// 完成以下 TODO 的部分，並且以 Module 的方式匯出 (ESM)
export default class Stack {
  // TODO: # 有特別的意思嗎？請以註解回覆。
  // #代表這個變數為私有屬性（Private properties），這個變數將無法從外部直接獲取和修改，
  // 需要透過 public function 像是 getXXX 或是 setXXX 來獲取和修改該變數。
  // 此外該變數無法被子類給繼承，子類亦可生成和父類同名的私有變數
  // ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties#description
  #items;

  constructor() {
    this.#items = [];
  }

  // 在 stack 頂部加入元素i
  push(element) {
    this.#items.push(element);
  }

  // 移除並回傳 stack 頂部的元素
  // 為空即回傳null
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.#items.pop();
  }

  // 回傳 stack 頂部的元素，但不移除它
  // 為空即回傳null
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.#items[this.#items.length - 1];
  }

  // 檢查 stack 是否為空
  isEmpty() {
    return this.#items.length == 0;
  }

  // 回傳 stack 中元素的個數
  size() {
    return this.#items.length;
  }

  // 清空 stack
  clear() {
    // TODO
    this.#items = [];
  }

  // 印出 stack 內容（可選）
  // 由於這裡的函式名為print，因此使用console.log來處理，而非選擇回傳一個字串的方式
  print() {
    if (this.isEmpty()) {
      console.log("");
    } else {
      console.log(this.#items.join(", "));
    }
  }
}
