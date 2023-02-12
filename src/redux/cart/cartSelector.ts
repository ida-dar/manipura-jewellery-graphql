import { createSelector } from '@reduxjs/toolkit';
import { CartItem } from 'src/interfaces';

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
