import { combineReducers } from '@reduxjs/toolkit';

// reducers
import userReducer from './userRedux';

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
