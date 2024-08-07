import {
  URL_INGREDIENTS
} from "../../utils/api";

export const FETCH_INGREDIENTS_REQUEST = 'FETCH_INGREDIENTS_REQUEST';
export const FETCH_INGREDIENTS_SUCCESS = 'FETCH_INGREDIENTS_SUCCESS';
export const FETCH_INGREDIENTS_FAILURE = 'FETCH_INGREDIENTS_FAILURE';

export const fetchIngredientsRequest = () => ({
  type: FETCH_INGREDIENTS_REQUEST
});

export const fetchIngredientsSuccess = data => ({
  type: FETCH_INGREDIENTS_SUCCESS,
  payload: data
});

export const fetchIngredientsFailure = error => ({
  type: FETCH_INGREDIENTS_FAILURE,
  payload: error
});

export const fetchIngredients = () => {
  return dispatch => {
    dispatch(fetchIngredientsRequest());
    fetch(URL_INGREDIENTS)
      .then(response => response.json())
      .then(data => {
        dispatch(fetchIngredientsSuccess(data.data)); // Передайте массив в Redux
      })
      .catch(error => dispatch(fetchIngredientsFailure(error.message)));
  };
};
