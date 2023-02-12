import { createAction } from 'src/utils/reduxUtils/createAction';
import { PRODUCT_ACTION_TYPES } from 'src/utils/reduxUtils/reduxTypes';

/* actions */
export const setProducts = (products: any) => createAction(PRODUCT_ACTION_TYPES.SET_PRODUCTS, products);
