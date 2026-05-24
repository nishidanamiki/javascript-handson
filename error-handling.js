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

// fetchとtry-catchを使ったエラーハンドリング
async function fetchUsers() {
  try {
    // 意図的に無効なURLを指定してエラーを発生させる
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/invalid-url",
    );

    // fetchは404のようなHTTPエラーでは例外をスローしない
    // response.okプロパティで成功したかを確認する必要がある
    if (!response.ok) {
      // サーバーからのレスポンスをエラーとして扱う
      throw new Error(`HTTPエラー: ${response.status}`);
    }

    const users = await response.json();
    console.log(users);
  } catch (error) {
    // ネットワークエラーや、throwされたエラーがここで捕捉される
    console.error("データの取得に失敗しました:", error);
  }
}

fetchUsers();
