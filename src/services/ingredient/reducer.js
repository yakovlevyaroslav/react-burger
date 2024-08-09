import {
  INGREDIENT_INFO,
} from './actions';

const initialState = {
  ingredient: []
};

export const ingredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case INGREDIENT_INFO:
      return {
        ...state,
        ingredient: [
          action.payload
        ]
      }
    default:
      return state
  }
}