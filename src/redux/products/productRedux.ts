import { AnyAction } from 'redux';
import { Product } from 'src/interfaces';
import { ProdState } from 'src/utils/reduxUtils/reduxTypes';
import { fetchProductsFail, fetchProductsStart, setProducts } from './productActions';

const initialState: ProdState = {
  products: [] as Product[],
  pending: false as boolean,
  error: null as Error | null,
};

/* reducer */
const productReducer = (state: ProdState = initialState, action = {} as AnyAction): ProdState => {
  if (fetchProductsStart.match(action)) {
    return {
      ...state,
      pending: false,
      error: null,
    };
  }

  if (setProducts.match(action)) {
    return {
      ...state,
      products: action.payload,
      pending: false,
      error: null,
    };
  }

  if (fetchProductsFail.match(action)) {
    return {
      ...state,
      pending: false,
      error: action.error,
    };
  }

  return state;
};

export default productReducer;
