
const makeRequest = (searchString) => {
  return new Request(`https://api.spaceflightnewsapi.net/v4/articles/?limit=10&title_contains=${searchString}`, {
    method: "GET",
  });
};


const fetchNews = async (searchString) => {
  try {
    const response =  await fetch(makeRequest(searchString));
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
}
