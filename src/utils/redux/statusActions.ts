import { User } from 'firebase/auth';
import { CartItem } from 'src/interfaces';

/* status */
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
};

interface setCartAction {
  type: USER_ACTION_TYPES.LOGIN_USER;
  payload: User | null;
  error?: Error | boolean;
}

export type CartAction = setCartAction;

/* user */
export enum USER_ACTION_TYPES {
  LOGIN_USER = 'LOGIN_USER',
}

export type UserState = {
  readonly currUser: User | null;
  readonly request: {
    readonly pending: boolean;
    readonly error: Error | null;
    readonly success: null;
  };
};

interface setUserAction {
  type: USER_ACTION_TYPES.LOGIN_USER;
  payload: User | null;
  error?: Error | boolean;
}

export type UserAction = setUserAction;
