# 建立 Express 專案

1. `npm init`
   - 詢問專案名稱、版本、描述、入口檔案、測試指令、git repo、關鍵字、作者、許可證，並且生成 `package.json`。
2. `npm install express`
   - 建立 `node_modules` 資料夾，並且在 `package.json` 的 dependencies 中新增了 `express` 。
     - `.bin`資料夾放了一些可執行文件，安裝時 npm 會自動將其加入到環境變數中，不用完整打出所有路徑。
     - `package.json`或 `package-lock.json` 設定的套件和他們需要的子套件。
   - 建立 `package-lock.json` 來記錄安裝的版本號。
     - 這樣可以確保每次安裝的版本都是一樣的，避免不同環境下安裝不同版本的問題。

# dependencies vs devDependencies

[npm docs 官方說法](https://docs.npmjs.com/cli/v7/configuring-npm/package-json#dependencies):

> - "dependencies": Packages required by your application in production.
> - "devDependencies": Packages that are only needed for local development and testing.

簡單來說，`dependencies` 是在生產環境下需要的套件，`devDependencies` 是在開發和測試環境下需要的套件。例如
`express` 套件就是不論在生產還是開發都需要的，所以放在`dependencies`中，而像`jest`套件只是在測試時需要，所以放在`devDependencies`中，這樣可以在不同的環境中很有效地分配執行資源（容量、安裝時間等等）。

```bash
# 要安裝到 devdependencies 中，可以使用 --save-dev 參數
npm install <package-name> --save-dev
```

# scripts

scripts 可以預先在`package.json`設定指令和腳本，可以避免重複輸入一長串指令和避免打錯指令。
例如：

```json
"scripts": {
  "start": "node server.js",
  "test": "jest",
  "build": "webpack --mode production",
  "dev": "nodemon server.js"
}
```

只要輸入 npm run start，就會執行`node server.js`指令，而不用每次都打這麼長的指令。 \
有些指令是默認的，例如`npm start`、`npm test`、`npm update`，可以直接執行，不用加`run`。 \
此外，還可以在該指令前後加上`pre`和`post`來設置前置或後續命令。

# 環境變數

在`.env`檔案中設定環境變數，例如：

```env
APP_PORT=3000
```

可以直接透過 `process.env` 來獲取當前環境已經設置的變數，但為了要在程式碼中讀取`.env`檔案，需要安裝`dotenv`套件，並使用`require("dotenv").config();`即可在程式碼啟動時讀取`.env`檔案中的環境變數。

# .gitignore

決定要不要上傳到 git 的因素

- 是否含有個人敏感資料
- 是否可以透過其他方式獲得
  - 例如 node_modules 資料夾裡包含了大量的模組，別人可以透過 package.json 來安裝，所以不需要上傳到 git。
- 是否會導致檔案過大
  - 例如 web 需要的圖片、影片等等，可以透過例如 CDN 的方式來儲存，傳到 git 的話會導致部署和分享時還需要額外下載這些檔案導致安裝變慢。
- 對於該環境是否有用處
  - 例如 cache 和 log 或是 MAC 的`.DS_Store`檔案只需要在本地端使用觀察即可，對生產環境沒有用處，不需要上傳到 git。

# CJS vs ESM

CommonJS (CJS) 是 Node.js 預設的模組系統，使用 `require` 和 `module.exports` 來引入和導出模組。 \
CJS 是動態導入的，只有在需要的時候才會載入模組。 \
CJS 的輸出是值的拷貝，而不是引用。 \
`require()`是同步的，所以大文件或多依賴的模組會導致性能問題。 \
文件擴展名可以是`.js`、`.json`。 \
無法直接在瀏覽器中運行，需要經過編譯。主要運行在伺服器端。

```js
// 引入
const express = require("express");
// 導出
module.exports = app;
```

ECMAScript Modules (ESM) 是 JavaScript 的模組系統，使用 `import` 和 `export` 來引入和導出模組。 \
ESM 是靜態導入的，可以在編譯階段提前加載來分析和刪除未使用的程式碼。 \
ESM 的輸出是引用，而不是值的拷貝。 \
支援異步載入模組，可以在需要的時候再載入模組，而不是一開始就載入所有模組。 \
文件擴展名必須是`.mjs`，或者在`package.json`中設置`"type": "module"`。 \
現代瀏覽器支援 ESM，不需要經過編譯。

```js
// 引入
import express from "express";
// 導出
export default app;
```

# localhost

- `localhost`:

  - `localhost`是一個特殊的主機名稱，默認指向本地主機，他會被解析為`127.0.0.1` IP 位址，也可以自己將其綁定到其他 IP，但是不建議。

- `127.0.0.1`:

  - `127.0.0.1`是 IPV4 的 loopback address，不論在哪個網路上始終指向當前使用的計算機。
  - 他是一個保留的 IP 位址，不會被分配給其他設備。
  - 實際上`127.0.0.0/8`網段都是 loopback address，所以從 `127.0.0.1` 到 `127.255.255.254` 都是可用的，但 `127.0.0.1` 是最常用的。

- `0.0.0.0`:

  - 當一個伺服器綁定到 `0.0.0.0` 上時，表示它將接收來自所有可用網絡接口的連接，所有不清楚的主機和目的網絡都會到達這。
  - 當一台主機還沒有被分配一個 IP 地址的時候，用於表示主機本身（DHCP 分配 IP 地址的時候）

- `255.255.255.255`:
  - 這是一個保留的廣播地址，用於向網絡上的所有設備發送廣播消息。
  - 這個地址不能被路由器轉發，只能在本地網絡中使用。

# curl

Curl 是一個在 linux 上用來下載和上傳的指令，他支援多種協議，包括 HTTP、HTTPS、FTP 等等。 \
為了測試網路連線，可以使用 curl 來發送 HTTP 請求，並查看回應。 \
例如 `curl -I http://example.com` 可以不下載整個頁面直接查看 HTTP Header 訊息來確認該伺服器是否可用。

以下是常見指令：

- GET

```bash
curl http://example.com
```

- POST

```bash
# -X 指定要使用的 HTTP 方法, -d 指定要傳送的資料
curl -X POST -d "param1=value1&param2=value2" http://example.com
```

- Download

```bash
# -o 指定要下載的檔案名稱，-O 下載後的檔案名稱和原始檔案名稱一樣
curl -o xxx.zip http://example.com/file.zip
```

- Header

```bash
# -H 指定要傳送的 header
curl -H "Authorization: Bearer <token>" http://example.com
```

- Verbose

```bash
# -v 顯示詳細的請求和回應訊息
curl -v http://example.com
```
