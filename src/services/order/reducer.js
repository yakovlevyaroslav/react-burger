import {
  ORDER_INFO,
} from './actions';

const initialState = {
  order: [],
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_INFO:
      return {
        ...state, 
        order: action.payload        
      }
    default:
      return state
  }
}