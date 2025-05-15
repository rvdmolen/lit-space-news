const BASE_URL = 'https://api.spaceflightnewsapi.net/v4';

const makeRequest = (url) => {
  return new Request(url, {
    method: "GET",
  });
};

const fetchNews = async (searchString, offset, signal) => {
  try {
    const url = `${BASE_URL}/articles/?limit=10&offset=${offset}&title_contains=${searchString}`;
    console.log(url)
    console.log(fetch)
    const response = await fetch(makeRequest(url), signal);
    return response.json();
  } catch (err) {
    console.log(err)
    throw err;
  }
}

const fetchNewsItem = async (newsItemId) => {
  try {
    const url = `${BASE_URL}/articles/${newsItemId}`;
    const response = await fetch(makeRequest(url));
    return response.json();
  } catch (err) {
    throw err;
  }
}

const fetchUrl = async (url) => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (err) {
    throw err;
  }
}

export const ApiService = {
  fetchUrl,
  fetchNews,
  fetchNewsItem,
  makeRequest
}
