import { AnyAction, configureStore, Dispatch, Middleware } from '@reduxjs/toolkit'; // redux-dev-tools and redux-thunk are included in redux-toolkit
//middleware
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './rootSaga';
// redux-persist
import persistReducer from 'redux-persist/lib/persistReducer';
import persistStore from 'redux-persist/lib/persistStore';
import storage from 'redux-persist/lib/storage';
//reducer
import rootReducer from './rootRedux';

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

/* save store to local storage config */
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user'],
};

/* middleware */
const sagaMiddleware = createSagaMiddleware();

const middlewares = [process.env.NODE_ENV !== 'production' && logger, sagaMiddleware].filter(Boolean) as Middleware<
  {},
  any,
  Dispatch<AnyAction>
>[]; // applyMiddleware() is not needed as it's already handled by configureStore

const persistedReducer = persistReducer(persistConfig, rootReducer);

/* create store */
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(middlewares),
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(rootSaga);

export const persistedStore = persistStore(store);

export default store;
