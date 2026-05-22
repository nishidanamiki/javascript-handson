// 1. 同期処理の例
console.log("1. 最初の処理");
console.log("2. 次の処理");
console.log("3. 最後の処理");

// 2. 非同期処理の例
console.log("1. 最初の処理");

// setTimeout は非同期処理
setTimeout(() => {
  console.log("2. 1秒後の処理");
}, 1000);

console.log("3. 最後の処理");

// 3-1. setTimeoutを使った非同期処理の例
setTimeout(() => {
  console.log("2秒経過しました");
}, 2000);

// 3-2. 複数のsetTimeoutを使った例
console.log("カウントダウン開始");

setTimeout(() => {
  console.log("3");
}, 1000);

setTimeout(() => {
  console.log("2");
}, 2000);

setTimeout(() => {
  console.log("1");
}, 3000);

setTimeout(() => {
  console.log("スタート！");
}, 4000);

console.log("（カウントダウン中...）");

// 4. コールバック関数を使った非同期処理
function fetchData(callback) {
  console.log("データ取得開始...");

  setTimeout(() => {
    const data = { name: "太郎", age: 25 };
    callback(data);
  }, 2000);
}

// 使用例
fetchData((result) => {
  console.log("データ取得完了:", result);
});

console.log("他の処理を実行...");
