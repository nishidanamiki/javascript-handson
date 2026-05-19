const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (b === 0) {
    return "エラー: 0で割ることはできません";
  }
  return a / b;
};

// テスト
console.log("足し算: 10 + 5 =", add(10, 5));
console.log("引き算: 10 - 5 =", subtract(10, 5));
console.log("掛け算: 10 * 5 =", multiply(10, 5));
console.log("割り算: 10 / 5 =", divide(10, 5));
console.log("割り算: 10 / 0 =", divide(10, 0));
