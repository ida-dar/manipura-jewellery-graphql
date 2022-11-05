import { AnyAction, createSelector } from '@reduxjs/toolkit'; // createSelector method from 'reselect' package (for memoization) is already included by default in @reduxjs/toolkit
import { Product } from 'src/interfaces';
import { createAction } from 'src/utils/reduxUtils/createAction';
import { ProdState, PRODUCT_ACTION_TYPES } from 'src/utils/reduxUtils/reduxTypes';

const initialState: ProdState = {
  products: [] as Product[],
  // TODO: add request to state
  // request: {
  //   pending: false as boolean,
  //   error: null as Error | null,
  //   success: null,
  // },
};

/* actions */
export const setProducts = (products: any) => createAction(PRODUCT_ACTION_TYPES.SET_PRODUCTS, products);

/* selector */

const selectProductsReducer = (state: { products: any }) => state.products;

const selectProductsSlice = createSelector(
  [selectProductsReducer],
  (productSlices: { products: any }) => productSlices.products
);

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

  switch (type) {
    case PRODUCT_ACTION_TYPES.SET_PRODUCTS: {
      return {
        ...state,
        products: payload,
      };
    }
    default:
      return state;
  }
};

export default productReducer;
