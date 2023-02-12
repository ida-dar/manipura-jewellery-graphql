import { AnyAction } from '@reduxjs/toolkit';
import { DocumentData } from 'firebase/firestore';
import { CallEffect, PutEffect, put, takeLatest, all, call } from 'redux-saga/effects';
import { getCollectionAndDocs } from 'src/utils/firebase/firebase';
import { endRequest, errorRequest } from 'src/utils/reduxUtils/createAction';
import { STATUS_ACTION_TYPES } from 'src/utils/reduxUtils/reduxTypes';
import { setProducts } from './productActions';

const reducerName = 'products';

/* saga */
function* fetchProducts(): Generator<
  | CallEffect<
      {
        id: string;
        data: DocumentData;
      }[]
    >
  | PutEffect<AnyAction>,
  void,
  unknown
> {
  try {
    const data = yield call(getCollectionAndDocs, 'products');
    yield put(setProducts(data));
    yield put(endRequest('products'));
  } catch (e) {
    yield put(errorRequest('products'));
  }
}

function* onFetchProducts() {
  yield takeLatest(`${reducerName}/${STATUS_ACTION_TYPES.START_REQUEST}`, fetchProducts);
}

export function* productsSaga() {
  yield all([call(onFetchProducts)]);
}
