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
