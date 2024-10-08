/*
Promise 是一個表示尚未完成但最終會完成（或失敗）的操作結果的對象。
這個操作可以是異步的（例如 API 請求、計時器等）。
當你調用一個返回 Promise 的函數時，這個 Promise 對象將在操作完成後被 "resolved"（成功）或 "rejected"（失敗）。
此函式的參數包含 resolve, reject，這兩個方法分別代表成功與失敗的回傳結果，
特別注意這兩個僅能回傳其中之一，回傳後表示此 Promise 事件結束。
resolve用.then取得結果，reject用.catch取得結果。
*/

function doJob(job, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      let now = new Date();
      resolve(`完成工作 ${job} at ${now.toISOString()}`);
    }, time);
  });
}

let now = new Date();
console.log(`開始工作 at ${now.toISOString()}`);

doJob("刷牙", 1000)
  .then((data) => {
    console.log(data);
    return doJob("吃早餐", 3000);
  })
  .then((data) => {
    console.log(data);
    return doJob("寫功課", 1000);
  })
  .then((data) => {
    console.log(data);
    return doJob("吃午餐", 2000);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((fail) => {
    console.log(fail);
  });

/*
  預期輸出類似:
  開始工作 at 2024-09-25T19:07:20.167Z
  完成工作 刷牙 at 2024-09-25T19:07:21.196Z
  完成工作 吃早餐 at 2024-09-25T19:07:24.198Z
  完成工作 寫功課 at 2024-09-25T19:07:25.199Z
  完成工作 吃午餐 at 2024-09-25T19:07:27.199Z
  */
