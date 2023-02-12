import { CartItem, Product, UserData } from 'src/interfaces';

/* request status */
export enum STATUS_ACTION_TYPES {
  START_REQUEST = 'START_REQUEST',
  END_REQUEST = 'END_REQUEST',
  ERROR_REQUEST = 'ERROR_REQUEST',
}

/* cart */
export enum CART_ACTION_TYPES {
  SET_CART_ITEMS = 'cart/SET_CART_ITEMS',
}

export type CartState = {
  readonly cartItems: CartItem[];
  readonly shippingPrice: number;
};

/* user */
export enum USER_ACTION_TYPES {
  SET_USER = 'user/SET_USER',
  CHECK_USER_SESSION = 'user/CHECK_USER_SESSION',
  // login
  GOOGLE_SIGN_IN_START = 'user/GOOGLE_SIGN_IN_START',
  EMAIL_SIGN_IN_START = 'user/EMAIL_SIGN_IN_START',
  SIGN_IN_SUCCESS = 'user/SIGN_IN_SUCCESS',
  SIGN_IN_FAIL = 'user/SIGN_IN_FAIL',
  // register
  SIGN_UP_START = 'user/SIGN_UP_START',
  SIGN_UP_SUCCESS = 'user/SIGN_UP_SUCCESS',
  SIGN_UP_FAIL = 'user/SIGN_UP_FAIL',
  // logout
  SIGN_OUT_START = 'user/SIGN_OUT_START',
  SIGN_OUT_SUCCESS = 'user/SIGN_OUT_SUCCESS',
  SIGN_OUT_FAIL = 'user/SIGN_OUT_FAIL',
}

export type UserState = {
  readonly currUser: UserData | null;
  readonly request: {
    readonly pending: boolean;
    readonly error: Error | null;
    readonly success: null;
  };
};

/* products */
export enum PRODUCT_ACTION_TYPES {
  SET_PRODUCTS = 'products/SET_PRODUCTS',
}

export type ProdState = {
  readonly products: Product[];
  readonly request: {
    readonly pending: boolean;
    readonly error: Error | null;
    readonly success: null;
  };
};
