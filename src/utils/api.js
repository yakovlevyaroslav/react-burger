export const URL_INGREDIENTS = 'https://norma.nomoreparties.space/api/ingredients';
export const URL_ORDER = 'https://norma.nomoreparties.space/api/orders';

export const postData = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
};