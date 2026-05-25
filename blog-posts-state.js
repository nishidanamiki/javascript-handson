const postsContainer = document.querySelector("#posts-container");
const loading = document.querySelector("#loading");
const errorMessage = document.querySelector("#error");
const empty = document.querySelector("#empty");

function showElement(element) {
  element.style.display = "block";
}
function hideElement(element) {
  element.style.display = "none";
}

async function fetchAndDisplayPosts() {
  showElement(loading);
  hideElement(postsContainer);
  hideElement(errorMessage);
  hideElement(empty);

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const posts = await response.json();

    hideElement(loading);
    if (posts.length === 0) {
      showElement(empty);
    } else {
      postsContainer.style.display = "grid";
      postsContainer.innerHTML = "";
      posts.forEach((post) => {
        // カード要素を作成
        const card = document.createElement("div");
        card.classList.add("post-card");
        const title = document.createElement("h2");
        title.textContent = post.title;
        const body = document.createElement("p");
        body.textContent = post.body;
        card.appendChild(title);
        card.appendChild(body);
        postsContainer.appendChild(card);
      });
    }
  } catch (error) {
    hideElement(loading);
    showElement(errorMessage);
    console.error("投稿の取得に失敗しました:", error);
  }
}

fetchAndDisplayPosts();
