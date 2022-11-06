import { AnyAction, createSelector, Dispatch } from '@reduxjs/toolkit'; // createSelector method from 'reselect' package (for memoization) is already included by default in @reduxjs/toolkit
import { Product } from 'src/interfaces';
import { getCollectionAndDocs } from 'src/utils/firebase/firebase';
import { createAction, endRequest, errorRequest, startRequest } from 'src/utils/reduxUtils/createAction';
import { ProdState, PRODUCT_ACTION_TYPES, STATUS_ACTION_TYPES } from 'src/utils/reduxUtils/reduxTypes';

const initialState: ProdState = {
  products: [] as Product[],
  request: {
    pending: false as boolean,
    error: null as Error | null,
    success: null,
  },
};

/* actions */
export const setProducts = (products: any) => createAction(PRODUCT_ACTION_TYPES.SET_PRODUCTS, products);

/* selector */
const selectProductsReducer = (state: { products: any }) => state.products;

const selectProductsSlice = createSelector(
  [selectProductsReducer],
  (productSlices: { products: any }) => productSlices.products
);

export const productsLoading = createSelector([selectProductsReducer], (productsSlice) => productsSlice.request.pending);

/* thunk */
export const fetchProducts = () => async (dispatch: Dispatch) => {
  // currying
  dispatch(startRequest());
  try {
    const data = await getCollectionAndDocs('products');
    dispatch(setProducts(data));
    dispatch(endRequest());
  } catch (e) {
    dispatch(errorRequest());
    throw Error;
  }
};

export const selectProducts = createSelector([selectProductsSlice], (products: Product[]) =>
  products.reduce((acc: any, products: any) => {
    const prod = {
      id: products.id,
      ...products.data,
    };
    acc.push(prod);
    return acc;
  }, [])
);

/* reducer */
const productReducer = (state: ProdState = initialState, action = {} as AnyAction) => {
  const { type, payload, error } = action;

  console.log('error', error);

  switch (type) {
    case PRODUCT_ACTION_TYPES.SET_PRODUCTS: {
      return {
        ...state,
        products: payload,
      };
    }
    case STATUS_ACTION_TYPES.START_REQUEST:
      return {
        ...state,
        request: {
          pending: true,
          error: null,
          success: false,
        },
      };
    case STATUS_ACTION_TYPES.END_REQUEST:
      return {
        ...state,
        request: {
          pending: false,
          error: null,
          success: true,
        },
      };
    case STATUS_ACTION_TYPES.ERROR_REQUEST:
      return {
        ...state,
        request: {
          pending: false,
          error: error,
          success: false,
        },
      };
    default:
      return state;
  }
};

export default productReducer;
