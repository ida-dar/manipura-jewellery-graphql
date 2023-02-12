import { createAction } from 'src/utils/reduxUtils/createAction';
import { CartItem } from 'src/interfaces';
import { addItem, removeItem, reduceQty } from 'src/utils/cartUtils';
import { CART_ACTION_TYPES } from 'src/utils/reduxUtils/reduxTypes';

/* actions */
export const addItemToCart = (cartItems: CartItem[], product: any) =>
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, addItem(cartItems, product));

export const removeItemFromCart = (cartItems: CartItem[], product: CartItem) =>
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, removeItem(cartItems, product));

export const quantityDown = (cartItems: CartItem[], product: CartItem) =>
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, reduceQty(cartItems, product));
