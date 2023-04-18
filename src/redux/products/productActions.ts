import { createAction, withMatcher } from 'src/utils/reduxUtils/createAction';
import {
  FetchProductsFail,
  FetchProductsStart,
  FetchProductsSuccess,
  PRODUCT_ACTION_TYPES,
} from 'src/utils/reduxUtils/reduxTypes';

/* actions */
export const setProducts = withMatcher(
  (products: any): FetchProductsSuccess => createAction(PRODUCT_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS, products)
);

export const fetchProductsStart = withMatcher(
  (): FetchProductsStart => createAction(PRODUCT_ACTION_TYPES.FETCH_PRODUCTS_START)
);
export const fetchProductsFail = withMatcher(
  (e: any): FetchProductsFail => createAction(PRODUCT_ACTION_TYPES.FETCH_PRODUCTS_FAIL, e)
);

// for future reference; uncomment, on hover will show type
/**
 * setProducts.type
 * setProducts.match
 */
