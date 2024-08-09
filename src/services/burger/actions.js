import { v4 as uuidv4 } from 'uuid';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';
export const REPLACE_BUN = 'REPLACE_BUN';
export const CLEAR_INGREDIENT_LIST = 'CLEAR_INGREDIENT_LIST';
export const MOVE_ITEM = 'MOVE_ITEM';


export const addIngredient = item => ({
  type: ADD_INGREDIENT,
  payload: {
    ...item,
    uniqueId: uuidv4()
  }
});

export const replaceBun = item => ({
  type: REPLACE_BUN,
  payload: item
});

export const removeIngredient = item => ({
  type: REMOVE_INGREDIENT,
  payload: item
});

export const clearIngredientList = () => ({
  type: CLEAR_INGREDIENT_LIST
});

export const moveItem = (fromIndex, toIndex) => ({
  type: MOVE_ITEM,
  payload: { fromIndex, toIndex },
});