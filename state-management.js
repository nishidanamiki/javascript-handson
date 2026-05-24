// 各UI要素を取得
const userList = document.querySelector("#user-list");
const loading = document.querySelector("#loading");
const error = document.querySelector("#error");
const empty = document.querySelector("#empty");

// UIの状態を更新するヘルパー関数
function showElement(element) {
  element.style.display = "block";
}
function hideElement(element) {
  element.style.display = "none";
}

async function fetchAndDisplayUsers() {
  // --- 1. ローディング状態 ---
  showElement(loading);
  hideElement(userList);
  hideElement(error);
  hideElement(empty);

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const users = await response.json();

    // --- 2. データ表示 or Empty状態 ---
    hideElement(loading);

    if (users.length === 0) {
      // データが空の場合
      showElement(empty);
    } else {
      // データがある場合
      showElement(userList);
      users.forEach((user) => {
        const listItem = document.createElement("li");
        listItem.textContent = user.name;
        userList.appendChild(listItem);
      });
    }
  } catch (e) {
    // --- 3. エラー状態 ---
    hideElement(loading);
    showElement(error);
    console.error("Fetch error:", e);
  }
}

// 実行
fetchAndDisplayUsers();
