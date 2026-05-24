// fetch APIでレスポンスとJSONデータを取得
async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

  console.log(response);

  if (!response.ok) {
    console.error("データの取得に失敗しました");
    return;
  }

  const post = await response.json();
  console.log(post);
}

fetchData();
