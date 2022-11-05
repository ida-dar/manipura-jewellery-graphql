import { AnyAction, createSelector } from '@reduxjs/toolkit';
import { CartItem } from 'src/interfaces';
import { addItem, removeItem, reduceQty } from 'src/utils/cartUtils';
import { createAction } from 'src/utils/reduxUtils/createAction';
import { CartState, CART_ACTION_TYPES } from 'src/utils/reduxUtils/reduxTypes';

const shipping = 25;

const initialState: CartState = {
  cartItems: [] as CartItem[],
  shippingPrice: shipping as number,
  // TODO: add request to state
  // request: {
  //   pending: false as boolean,
  //   error: null as Error | null,
  //   success: null,
  // },
};

/* actions */
export const addItemToCart = (cartItems: CartItem[], product: any) =>
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, addItem(cartItems, product));

export const removeItemFromCart = (cartItems: CartItem[], product: CartItem) =>
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, removeItem(cartItems, product));

export const quantityDown = (cartItems: CartItem[], product: CartItem) =>
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, reduceQty(cartItems, product));

/* selectors */
const selectCartReducer = (state: { cart: any }) => state.cart;

export const selectCartItems = createSelector([selectCartReducer], (cart: any) => cart.cartItems);
export const selectCartCount = createSelector(
  [selectCartItems],
  (cartItems: CartItem[]) => cartItems.reduce((total: number, cartItem: CartItem) => total + cartItem.quantity, 0) // (prevValue, currValue) => prevValue + currValue, intialValue
);
export const selectCartTotal = createSelector([selectCartItems], (cartItems: CartItem[]) =>
  cartItems.reduce((total: number, cartItem: CartItem) => total + cartItem.quantity * parseInt(cartItem.price), 0)
);

/* reducer */
const cartReducer = (state: CartState = initialState, action = {} as AnyAction) => {
  const { type, payload, error } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS: {
      return {
        ...state,
        cartItems: payload,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
