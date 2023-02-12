import { all, call } from 'redux-saga/effects';
import { productsSaga } from './products/productSaga';
import { userSaga } from './user/userSaga';

// generator function; '*' is an ES6 generator function
export function* rootSaga() {
  yield all([call(productsSaga), call(userSaga)]);
}
