export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';
export const REPLACE_BUN = 'REPLACE_BUN';
export const MOVE_ITEM = 'MOVE_ITEM';

export const addIngredient = data => ({
  type: ADD_INGREDIENT,
  payload: data
});

export const replaceBun = data => ({
  type: REPLACE_BUN,
  payload: data
});

export const removeIngredient = data => ({
  type: REMOVE_INGREDIENT,
  payload: data
});

export const moveItem = (fromIndex, toIndex) => ({
  type: MOVE_ITEM,
  payload: { fromIndex, toIndex },
});
