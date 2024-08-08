export const BASE_URL = 'https://norma.nomoreparties.space/api'

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
}

export const requestFunc = (url, options) => {
  return fetch(url, options).then(checkResponse)
}