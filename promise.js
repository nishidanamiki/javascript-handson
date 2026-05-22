// Promiseの基本的な使い方
/*
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;

    if (success) {
      resolve("成功しました！");
    } else {
      reject("エラーが発生しました");
    }
  }, 1000);
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("処理完了");
  });
*/

// 実践的な例：データ取得

function fetchUser(userId) {
  return new Promise((resolve, reject) => {
    console.log(`ユーザー ${userId} のデータを取得中...`);

    setTimeout(() => {
      if (userId > 0) {
        resolve({
          id: userId,
          name: "山田太郎",
          email: "yamada@example.com",
        });
      } else {
        reject("無効なユーザーIDです");
      }
    }, 1500);
  });
}

/*
// 使用例
fetchUser(3)
  .then((user) => {
    console.log("ユーザー情報:", user);
  })
  .catch((error) => {
    console.error("エラー:", error);
  });
*/

// Promiseチェーン
/*
function fetchUserForChain(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: userId, name: "山田太郎" });
    }, 1000);
  });
}

function fetchPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: "最初の投稿" },
        { id: 2, title: "2番目の投稿" },
      ]);
    }, 1000);
  });
}

function fetchComments(postId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, text: "素晴らしい！" },
        { id: 2, text: "参考になりました" },
      ]);
    }, 1000);
  });
}

// promiseチェーンで連結
fetchUserForChain(1)
  .then((user) => {
    console.log("ユーザー:", user.name);
    return fetchPosts(user.id);
  })
  .then((posts) => {
    console.log("投稿数:", posts.length);
    return fetchComments(posts[0].id);
  })
  .then((comments) => {
    console.log("コメント数:", comments.length);
  })
  .catch((error) => {
    console.error("エラー:", error);
  });
*/

// Promise.allの例
/*
const promise1 = fetchUser(1);
const promise2 = fetchUser(2);
const promise3 = fetchUser(3);

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log("全ユーザー:", results);
  })
  .catch((error) => {
    console.error("エラー:", error);
  });
*/

// Promise.race
const slow = new Promise((resolve) => {
  setTimeout(() => resolve("遅い処理"), 3000);
});

const fast = new Promise((resolve) => {
  setTimeout(() => resolve("早い処理"), 1000);
});

Promise.race([slow, fast]).then((result) => {
  console.log("勝者:", result);
});
