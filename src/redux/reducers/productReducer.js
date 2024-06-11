import { ActionTypes } from "../contants/action-type";

let initialState = {
  products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
     case ActionTypes.SELECTED_PRODUCT:
      return { ...state, products: payload };
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
      
    default:
      return state;
  }
};

// Action function -> function Destructure -> all equired data pass 