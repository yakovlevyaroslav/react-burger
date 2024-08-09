import { 
  ADD_INGREDIENT, 
  REMOVE_INGREDIENT, 
  REPLACE_BUN, 
  CLEAR_INGREDIENT_LIST,
  MOVE_ITEM,
} from './actions'

const initialState = {
  burger: []
}

export const burgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      if (action.payload.type === 'bun') {
        return {
          ...state,
          burger: [
            action.payload, 
            ...state.burger
          ],
        };
      } else {
        return {
          ...state,
          burger: [
            ...state.burger, 
            action.payload
          ],
        };
      }
    case REPLACE_BUN:
      const ingredientsFilter = state.burger.filter(item => item.type !== 'bun');
      return {
        ...state,
        burger: [
          action.payload,
          ...ingredientsFilter
        ],
      }
    case REMOVE_INGREDIENT:
      return {
        ...state,
        burger: state.burger.filter((_, index) => index !== action.payload)
      };
    case CLEAR_INGREDIENT_LIST:
      return {
        ...state,
        burger: []
      };
    case MOVE_ITEM:
      const { fromIndex, toIndex } = action.payload;
      let updatedItems = [...state.burger];
      // Проверка наличия 'bun' в текущем состоянии
      const bunIndex = state.burger.findIndex(item => item.type === 'bun');
      let bunItem = null;
      if (bunIndex !== -1) {
        // Извлекаем и удаляем элемент 'bun'
        bunItem = updatedItems.splice(bunIndex, 1)[0];
      }
      // Извлекаем перемещаемый элемент
      const [movedItem] = updatedItems.splice(fromIndex, 1);
      updatedItems.splice(toIndex, 0, movedItem);
      // Если есть элемент 'bun', возвращаем его в начало
      if (bunItem) {
        updatedItems.unshift(bunItem);
      }
      return {
        ...state,
        burger: updatedItems,
      };
    default:
      return state
  }
}