import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients/reducer';
import { ingredientReducer } from './ingredient/reducer';
import { burgerReducer } from './burger/reducer';
import { orderReducer } from './order/reducer';

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  ingredient: ingredientReducer,
  burger: burgerReducer,
  order: orderReducer,
});