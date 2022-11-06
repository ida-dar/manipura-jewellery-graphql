import { AnyAction, configureStore, Dispatch, Middleware } from '@reduxjs/toolkit'; // redux-dev-tools and redux-thunk are included in redux-toolkit
//middleware
import logger from 'redux-logger';
import thunk from 'redux-thunk';
// redux-persist
import persistReducer from 'redux-persist/lib/persistReducer';
import persistStore from 'redux-persist/lib/persistStore';
import storage from 'redux-persist/lib/storage';
//reducer
import rootReducer from './rootRedux';

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

/* middleware */
const middlewares = [process.env.NODE_ENV !== 'production' && logger, thunk].filter(Boolean) as Middleware<
  {},
  any,
  Dispatch<AnyAction>
>[]; // applyMiddleware() is not needed as it's already handled by configureStore

/* save store to local storage config */
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

/* create store */
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(middlewares),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistedStore = persistStore(store);

export default store;
