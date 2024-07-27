export const fetchBurgerData = async () => {
  try {
    const response = await fetch('https://norma.nomoreparties.space/api/ingredients');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data; // Assuming the data you need is in the "data" field
  } catch (error) {
    console.error('Ошибка получение ингридиентов fetchBurgerData:', error);
    return [];
  }
};
