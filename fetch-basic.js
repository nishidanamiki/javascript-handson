// fetchの基本構文
async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

  console.log(response);
}

fetchData();
