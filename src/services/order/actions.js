import { BASE_URL, requestFunc } from "../../utils/api";
import { clearIngredientList } from "../burger/actions";

export const ORDER_INFO = 'ORDER_INFO';
export const START_LOADING = 'START_LOADING';
export const STOP_LOADING = 'STOP_LOADING';

export const startLoading = () => ({
  type: START_LOADING,
});

export const stopLoading = () => ({
  type: STOP_LOADING,
});

export const orderInfo = data => ({
  type: ORDER_INFO,
  payload: data
});

export const postBurgerData = (burgerIngredients) => {
  return async (dispatch) => {
    dispatch(startLoading());

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
      
      dispatch(orderInfo(responseData)); // Отправка данных заказа в стор
      return responseData;
    } catch (error) {
      console.error('Error:', error);
    } finally {
      dispatch(stopLoading());
      dispatch(clearIngredientList())
    }
  };
};