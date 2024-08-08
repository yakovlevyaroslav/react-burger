import { BASE_URL, requestFunc } from "../../utils/api";

export const ORDER_INFO = 'ORDER_INFO';

export const orderInfo = data => ({
  type: ORDER_INFO,
  payload: data
});

export const postBurgerData = (burgerIngredients) => {
  return async (dispatch) => {
    try {
      const url = `${BASE_URL}/orders`;
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(burgerIngredients),
      };

      const responseData = await requestFunc(url, options);
      
      dispatch(orderInfo(responseData));
      return responseData;
    } catch (error) {
      console.error('Error:', error);
    }
  };
};