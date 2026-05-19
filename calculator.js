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

const calculate = (a, operator, b) => {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  } else {
    return "エラー: 不正な演算子です";
  }
};

// テスト
console.log("10 + 5 = ", calculate(10, "+", 5));
console.log("10 - 5 =", calculate(10, "-", 5));
console.log("10 * 5 =", calculate(10, "*", 5));
console.log("10 / 5 =", calculate(10, "/", 5));
console.log("10 % 5 =", calculate(10, "%", 5));

const calculations = [
  { a: 100, operator: "+", b: 50 },
  { a: 100, operator: "-", b: 30 },
  { a: 25, operator: "*", b: 4 },
  { a: 100, operator: "/", b: 5 },
  { a: 10, operator: "/", b: 0 },
];

console.log("=== 計算結果 ===");

for (const calc of calculations) {
  const result = calculate(calc.a, calc.operator, calc.b);
  console.log(`${calc.a} ${calc.operator} ${calc.b} = ${result}`);
}
