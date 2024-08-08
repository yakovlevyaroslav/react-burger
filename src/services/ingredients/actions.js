import {
  BASE_URL,
  requestFunc
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
    dispatch(fetchIngredientsRequest())
    requestFunc(`${BASE_URL}/ingredients`)
    .then(data => {
      dispatch(fetchIngredientsSuccess(data.data));
    })
    .catch(error => dispatch(fetchIngredientsFailure(error.message)))
  };
};

