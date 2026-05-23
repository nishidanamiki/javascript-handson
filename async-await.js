// async関数は常にPromiseを返す
async function greet() {
  return "こんにちは";
}

// 以下と同じ意味
// function greet() {
//   return Promise.resolve("こんにちは");
// }

// 使い方
greet().then((message) => {
  console.log(message);
});

// Promiseを返す関数
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "太郎", age: 25 });
    }, 1000);
  });
}

// thenを使った書き方
fetchData().then((data) => {
  console.log(data);
});

// async/awaitを使った書き方
async function getData() {
  const data = await fetchData(); // Promiseが解決されるまで待つ
  console.log(data);
}

getData();
