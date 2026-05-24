// try-catchの基本構文
try {
  // エラーが発生する可能性のあるコード
  console.log("tryブロックの処理を開始します");

  // 意図的にエラーを発生させる
  undefinedFunction();

  console.log("この行は実行されません");
} catch (error) {
  // エラーが発生した場合に実行されるコード
  console.error("エラーが発生しました！");
  console.error(error); // 発生したエラーオブジェクト
}

console.log("try...catchブロックの外の処理は続行されます");
