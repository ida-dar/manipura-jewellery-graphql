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
}

export type UserState = {
  readonly currUser: UserData | null;
  // TODO: add request to state
  // readonly request: {
  //   readonly pending: boolean;
  //   readonly error: Error | null;
  //   readonly success: null;
  // };
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
