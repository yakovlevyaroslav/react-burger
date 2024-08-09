import {
  ORDER_INFO,
  START_LOADING,
  STOP_LOADING
} from './actions';

const initialState = {
  isLoadingPost: false,
  orderData: [],
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_INFO:
      return {
        ...state,
        orderData: action.payload,
      };
    case START_LOADING:
      return {
        ...state,
        isLoadingPost: true,
      };
    case STOP_LOADING:
      return {
        ...state,
        isLoadingPost: false,
      };
    default:
      return state;
  }
};
