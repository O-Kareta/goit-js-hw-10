export { fetchBreeds, fetchCatBreed };

const API_KEY =
  'live_HSrAApPnq10b8Twxp85rcCUxupmS3Lmb9kpxN2aTs3WekepVwVz8XA9V2xpOSVfe';
const BASE_URL = 'https://api.thecatapi.com/v1';

function fetchBreeds() {
  return fetch(`${BASE_URL}/breeds`, {
    headers: {
      'x-api-key': API_KEY,
    },
  }).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function fetchCatBreed(catId) {
  return fetch(`${BASE_URL}/images/search?breed_ids=${catId}`, {
    headers: {
      'x-api-key': API_KEY,
    },
  }).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
