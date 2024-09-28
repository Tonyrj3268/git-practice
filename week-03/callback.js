function doJob(job, time, cb) {
  setTimeout(() => {
    // 只有在這裡，才能知道這個非同步的 setTimeout 已經做完事情了
    let now = new Date();
    cb(`完成工作 ${job} at ${now.toISOString()}`);
  }, time);
}
let now = new Date();
// 刷牙 1sec -> 吃早餐 3 sec -> 寫功課 1sec -> 吃午餐 2sec
console.log(`開始工作 at ${now.toISOString()}`);

doJob("刷牙", 1000, function (data) {
  console.log(data);
  doJob("吃早餐", 3000, function (data) {
    console.log(data);
    doJob("寫功課", 1000, function (data) {
      console.log(data);
      doJob("吃午餐", 2000, function (data) {
        console.log(data);
      });
    });
  });
});

/*
expect like this:
開始工作 at 2024-09-25T19:07:20.167Z
完成工作 刷牙 at 2024-09-25T19:07:21.196Z
完成工作 吃早餐 at 2024-09-25T19:07:24.198Z
完成工作 寫功課 at 2024-09-25T19:07:25.199Z
完成工作 吃午餐 at 2024-09-25T19:07:27.199Z
*/
