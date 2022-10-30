import { User } from 'firebase/auth';
import { CartItem } from 'src/interfaces';

/* request status */
export enum STATUS_ACTION_TYPES {
  START_REQUEST = 'START_REQUEST',
  END_REQUEST = 'END_REQUEST',
  ERROR_REQUEST = 'ERROR_REQUEST',
}

/* cart */
export enum CART_ACTION_TYPES {
  SET_CART_ITEMS = 'SET_CART_ITEMS',
}

export type CartState = {
  cartItems: CartItem[];
  cartCount: number;
  cartTotal: number;
  shippingPrice: number;
  readonly request: {
    readonly pending: boolean;
    readonly error: Error | null;
    readonly success: null;
  };
};

/* user */
export enum USER_ACTION_TYPES {
  SET_USER = 'SET_USER',
}

export type UserState = {
  readonly currUser: User | null;
  readonly request: {
    readonly pending: boolean;
    readonly error: Error | null;
    readonly success: null;
  };
};
