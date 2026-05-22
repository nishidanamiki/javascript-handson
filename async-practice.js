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
