import { User } from 'firebase/auth';
import { CartItem, Product, UserData } from 'src/interfaces';

/**
 * actions
 */
export type ActionWithPayload<T, P> = {
  error?: any;
  type: T;
  payload: P;
};

export type Action<T> = {
  type: T;
};

/**
 * cart
 */
export type CartState = {
  readonly cartItems: CartItem[];
  readonly shippingPrice: number;
};

/**
 * user
 */
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
};

export type SetUser = ActionWithPayload<USER_ACTION_TYPES.SET_USER, User | null>;
export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>;

export type SetGoogleSignIn = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>;
export type SetEmailSignIn = ActionWithPayload<USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email: string; password: string }>;
export type SignInSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_SUCCESS, any>;
export type SignInFail = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_FAIL, any>;

export type SignOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>;
export type SignOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>;
export type SignOutFail = ActionWithPayload<USER_ACTION_TYPES.SIGN_OUT_FAIL, any>;

export type SignUpStart = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_START,
  { email: string; password: string; displayName: string }
>;
export type SignUpSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user: any; additionalDetails: any }>;
export type SignUpFail = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_FAIL, any>;

export type UserAction =
  | SetUser
  | CheckUserSession
  | SetGoogleSignIn
  | SetEmailSignIn
  | SignInSuccess
  | SignInFail
  | SignOutStart
  | SignOutSuccess
  | SignOutFail
  | SignUpStart
  | SignUpFail;

/**
 * products
 */
export enum PRODUCT_ACTION_TYPES {
  FETCH_PRODUCTS_START = 'products/FETCH_PRODUCTS_START',
  FETCH_PRODUCTS_SUCCESS = 'products/FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_FAIL = 'products/FETCH_PRODUCTS_FAIL',
}

export type ProdState = {
  readonly products: Product[];
  readonly pending: boolean;
  readonly error: Error | null;
};

export type FetchProductsStart = Action<PRODUCT_ACTION_TYPES.FETCH_PRODUCTS_START>;
export type FetchProductsSuccess = ActionWithPayload<PRODUCT_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS, any>;
export type FetchProductsFail = ActionWithPayload<PRODUCT_ACTION_TYPES.FETCH_PRODUCTS_FAIL, any>;

export type ProductAction = FetchProductsStart | FetchProductsSuccess | FetchProductsFail;
