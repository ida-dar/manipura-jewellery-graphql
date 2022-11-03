import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'; // redux-dev-tools and redux-thunk are included in redux-toolkit
import logger from 'redux-logger';
import rootReducer from './rootRedux';

// middleware
const middlewares = [logger]; // applyMiddleware() is not needed as it's already handled by configureStore
const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

// create store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware: () => any[]) => customizedMiddleware.concat(middlewares),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
