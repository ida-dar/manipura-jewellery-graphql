import { combineReducers } from '@reduxjs/toolkit';

// reducers
import userReducer from './userRedux';
import productRedux from './productRedux';
import cartReducer from './cartRedux';

const rootReducer = combineReducers({
  user: userReducer,
  products: productRedux,
  cart: cartReducer,
});

export default rootReducer;
