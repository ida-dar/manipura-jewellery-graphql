import { AnyAction } from '@reduxjs/toolkit'; // createSelector method from 'reselect' package (for memoization) is already included by default in @reduxjs/toolkit
import { Product } from 'src/interfaces';
import { ProdState, PRODUCT_ACTION_TYPES, STATUS_ACTION_TYPES } from 'src/utils/reduxUtils/reduxTypes';

const initialState: ProdState = {
  products: [] as Product[],
  request: {
    pending: false as boolean,
    error: null as Error | null,
    success: null,
  },
};

const reducerName = 'products';

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
    case `${reducerName}/${STATUS_ACTION_TYPES.START_REQUEST}`:
      return {
        ...state,
        request: {
          pending: true,
          error: null,
          success: false,
        },
      };
    case `${reducerName}/${STATUS_ACTION_TYPES.END_REQUEST}`:
      return {
        ...state,
        request: {
          pending: false,
          error: null,
          success: true,
        },
      };
    case `${reducerName}/${STATUS_ACTION_TYPES.ERROR_REQUEST}`:
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
