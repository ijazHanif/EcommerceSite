import { productReducer } from './productReducer';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  allProducts: productReducer,
});

export default rootReducer;
