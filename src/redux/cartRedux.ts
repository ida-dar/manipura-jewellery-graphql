import { CartAction, CART_ACTION_TYPES, STATUS_ACTION_TYPES } from 'src/utils/redux/statusActions';

/* action name creator */
const reducerName = 'cart';
const createActionName = (name: string) => `app/${reducerName}/${name}`;

/* action types */
const SET_CART_ITEMS = createActionName(CART_ACTION_TYPES.SET_CART_ITEMS);

const START_REQUEST = createActionName(STATUS_ACTION_TYPES.START_REQUEST);
const END_REQUEST = createActionName(STATUS_ACTION_TYPES.END_REQUEST);
const ERROR_REQUEST = createActionName(STATUS_ACTION_TYPES.ERROR_REQUEST);

/* action creators */
export const setCartItems = (payload: any) => ({ payload, type: SET_CART_ITEMS });

export const startRequest = (payload: any) => ({ payload, type: START_REQUEST });
export const endRequest = (payload: any) => ({ payload, type: END_REQUEST });
export const errorRequest = (payload: any) => ({ payload, type: ERROR_REQUEST });

/* reducer */
const cartReducer = (state: any, action = {} as CartAction) => {
  const { type, payload, error } = action;

  switch (type) {
    case SET_CART_ITEMS: {
      return {
        ...state,
        ...payload,
      };
    }
    case START_REQUEST:
      return {
        ...state,
        request: {
          pending: true,
          error: null,
          success: false,
        },
      };
    case END_REQUEST:
      return {
        ...state,
        request: {
          pending: false,
          error: null,
          success: true,
        },
      };
    case ERROR_REQUEST:
      return {
        ...state,
        request: {
          pending: false,
          error: error,
          success: false,
        },
      };
    default:
      throw new Error(`Unhandled action ${type} in cartReducer`);
  }
};

export default cartReducer;
