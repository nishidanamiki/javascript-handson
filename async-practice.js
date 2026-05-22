// 課題1：実行順序を予測する
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");

setTimeout(() => {
  console.log("D");
}, 1000);

console.log("E");

// 課題2：カウントダウンタイマー
function countdown(seconds) {
  console.log(`カウントダウン開始: ${seconds}秒`);

  for (let i = seconds; i >= 0; i--) {
    setTimeout(
      () => {
        if (i > 0) {
          console.log(i);
        } else {
          console.log("完了！");
        }
      },
      (seconds - i) * 1000,
    );
  }
}

countdown(10);
