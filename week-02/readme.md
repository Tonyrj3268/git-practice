## 安裝的 nodejs 版本

我透過 `nvm ls-remote` 觀察到最新的 LTS 版本是 v20.17.0，所以我安裝的版本是 v20.17.0

```bash
# 安裝 LTS 版本
nvm install --lts
```

- 我會選擇安裝 LTS 版本的原因是因為此版本通常比較穩定且團隊仍還負責修復，此外，由於多數人也會選擇 LTS 版本，選此可以盡量避免和其他人的版本衝突。
- 另外，我注意到 LTS 通常會包含很多小版本，這些小版本通常是為了修正一些 bug 或者是安全性問題以及向後兼容。
- 由於多數人會使用 Node.js 作為未來的作業環境，所以我目前會使用 Node.js，否則我會考慮使用我比較擅長的 Python 來做開發。

## nvm 與 npm 分別是什麼

- **nvm**: Node Version Manager，是 Node.js 的版本管理工具。它可以幫助我們下載或刪除 Node.js 的版本，以及在不同版本之間做切換，作用類似於 Python 的 pyenv。
- **npm**: Node Package Manager，是 Node.js 的套件管理工具。它幫助我們簡化了安裝、更新、刪除套件的過程（否則我們可能需要直接下載原始碼），並且可以幫助我們管理各個套件之間的依賴問題，作用類似於 Python 的 pip。

## 作業要求是以 array 函式來完成 sum，你選擇用 reduce，而不是其他 array 函式，為什麼？有研究過其他 array 函式嗎？為什麼不是選其他的？

- 我是從`[MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)`這裡尋找 array 的實體方法，並且找到了`reduce`這個方法，覺得這個方式比較特別，且他的範例也是 array 元素加總，所以我選擇使用`reduce`。
- 我有看到`forEach`函式，但是題目要求不要用 for 迴圈，所以我沒有選擇使用`forEach`。
- 課堂上有人示範了`map`函式也可以達成，我將補充進`sum.js`裡。

## 你提供了兩種作法，本質上都是遞回，但第二種有用到 closure，請你分析一下第二種作法跟第一種作法的差異，有什麼優缺點？

- 在第二種方法中，我多建立了一個 dict 來存放遞回的結果，可以避免重複計算，這樣的優點是可以節省計算時間，但缺點是會佔用更多的記憶體。
- 另外閉包讓我可以建立一些變數在該 function 的作用域中，而不需要額外建立一個類別或是設置全域變數來存放變數。

## 有沒有可能讓 print 也能被測試（被 assert）？

- 網路上有兩大做法
  1. 重寫 `console.log`來捕獲輸出並儲存進行測試。
  2. 使用`Jest`或是`Mocha`等測試框架，本質上也是重寫`console.log`。
