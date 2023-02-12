import { combineReducers } from '@reduxjs/toolkit';

// reducers
import userReducer from './user/userRedux';
import productRedux from './products/productRedux';
import cartReducer from './cart/cartRedux';

const rootReducer = combineReducers({
  user: userReducer,
  products: productRedux,
  cart: cartReducer,
});

export default rootReducer;
