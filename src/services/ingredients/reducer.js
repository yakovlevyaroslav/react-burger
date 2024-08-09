import {
  FETCH_INGREDIENTS_REQUEST,
  FETCH_INGREDIENTS_SUCCESS,
  FETCH_INGREDIENTS_FAILURE
} from './actions';

const initialState = {
  ingredients: [],
  loading: false,
  error: null
};

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INGREDIENTS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_INGREDIENTS_SUCCESS:
      return {
        ...state, 
        loading: false,
        ingredients: action.payload        
      }
    case FETCH_INGREDIENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}