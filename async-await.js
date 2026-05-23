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

// Promiseチェーンとの比較
// ユーザー取得
function getUser(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: userId, name: "山田太郎" });
    }, 500);
  });
}

// 投稿取得
function getPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, userId: userId, title: "最初の投稿" },
        { id: 2, userId: userId, title: "2番目の投稿" },
      ]);
    }, 500);
  });
}

// コメント取得
function getComments(postId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, postId: postId, text: "素晴らしい記事です！" },
        { id: 2, postId: postId, text: "参考になりました" },
      ]);
    }, 500);
  });
}

// Promiseチェーン版
getUser(1)
  .then((user) => {
    console.log("ユーザー:", user.name);
    return getPosts(user.id);
  })
  .then((posts) => {
    console.log("投稿数:", posts.length);
    return getComments(posts[0].id);
  })
  .then((comments) => {
    console.log("コメント数:", comments.length);
  })
  .catch((error) => {
    console.error("エラー:", error);
  });

// async/await版
async function fetchAllData() {
  try {
    const user = await getUser(1);
    console.log("ユーザー:", user.name);

    const posts = await getPosts(user.id);
    console.log("投稿数:", posts.length);

    const comments = await getComments(posts[0].id);
    console.log("コメント数:", comments.length);
  } catch (error) {
    console.error("エラー:", error);
  }
}

fetchAllData();

// async/awaitのエラーハンドリング
// ※このURLは教材用のため、実際には動作しない可能性がある
async function fetchUser(id) {
  try {
    const response = await fetch(`https://api.example.com/users/${id}`);

    if (!response.ok) {
      throw new Error("ユーザーが見つかりません");
    }

    const user = await response.json();
    return user;
  } catch (error) {
    console.error("エラー:", error.message);
    return null;
  }
}
