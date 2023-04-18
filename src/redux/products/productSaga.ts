import { AnyAction } from '@reduxjs/toolkit';
import { DocumentData } from 'firebase/firestore';
import { CallEffect, PutEffect, put, takeLatest, all, call } from 'redux-saga/effects';
import { getCollectionAndDocs } from 'src/utils/firebase/firebase';
import { PRODUCT_ACTION_TYPES } from 'src/utils/reduxUtils/reduxTypes';
import { fetchProductsFail, setProducts } from './productActions';

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
  } catch (e) {
    yield put(fetchProductsFail(e));
  }
}

function* onFetchProducts() {
  yield takeLatest(PRODUCT_ACTION_TYPES.FETCH_PRODUCTS_START, fetchProducts);
}

export function* productsSaga() {
  yield all([call(onFetchProducts)]);
}
