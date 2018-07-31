const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=ba026b63b21c47eb8f7cdbad6163265b";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}