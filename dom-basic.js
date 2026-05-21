// IDで要素を取得
const mainTitle = document.querySelector("#main-title");
console.log(mainTitle.textContent);

// クラスで最初の要素を取得
const firstItem = document.querySelector(".list-item");
console.log(firstItem.textContent);

// クラスで全ての要素を取得
const allItems = document.querySelectorAll(".list-item");

// allItemsはNodeListなので、forEachでループ処理できる
allItems.forEach((item) => {
  console.log(item.textContent);
});

const content = document.querySelector("#content");

content.innerHTML = "<h2>新しいタイトル</h2><p>これは新しい段落です。</p>";

console.log(content.textContent);
