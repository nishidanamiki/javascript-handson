const myButton = document.querySelector("#my-button");

function handleClick() {
  alert("ボタンがクリックされました！");
}

// ボタンがクリックされたらhandleClick関数を実行
myButton.addEventListener("click", handleClick);

const input = document.querySelector("#my-input");

input.addEventListener("input", function (event) {
  // event.target はイベントが発生した要素（この場合はinput要素）
  // event.target.value はその要素の現在の値
  console.log("入力内容:", event.target.value);
});
