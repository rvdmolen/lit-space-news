
const BASE_URL = 'https://api.spaceflightnewsapi.net/v4';

const makeRequest = (searchString, offset) => {
  return new Request(`${BASE_URL}/articles/?limit=10&offset=${offset}&title_contains=${searchString}`, {
    method: "GET",
  });
};


const fetchNews = async (searchString) => {
  try {
    const response =  await fetch(makeRequest(searchString), {mode: 'no-cors'});
    return response.json();
  } catch (err) {
    throw err;
  }
}

const fetchUrl = async (url) => {
  try {
    const response =  await fetch(url);
    return response.json();
  } catch (err) {
    throw err;
  }
}

export const ApiService = {
  fetchUrl,
  fetchNews,
  makeRequest
}
