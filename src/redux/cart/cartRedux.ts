import { AnyAction } from '@reduxjs/toolkit';
import { CartItem } from 'src/interfaces';
import { CartState, CART_ACTION_TYPES } from 'src/utils/reduxUtils/reduxTypes';

const shipping = 25;

const initialState: CartState = {
  cartItems: [] as CartItem[],
  shippingPrice: shipping as number,
};

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
