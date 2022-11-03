import { CART_ACTION_TYPES, STATUS_ACTION_TYPES } from 'src/utils/reduxUtils/reduxTypes';

/* reducer */
const cartReducer = (state: any, action = {} as any) => {
  const { type, payload, error } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS: {
      return {
        ...state,
        ...payload,
      };
    }
    case STATUS_ACTION_TYPES.START_REQUEST:
      return {
        ...state,
        request: {
          pending: true,
          error: null,
          success: false,
        },
      };
    case STATUS_ACTION_TYPES.END_REQUEST:
      return {
        ...state,
        request: {
          pending: false,
          error: null,
          success: true,
        },
      };
    case STATUS_ACTION_TYPES.ERROR_REQUEST:
      return {
        ...state,
        request: {
          pending: false,
          error: error,
          success: false,
        },
      };
    default:
      return state;
  }
};

export default cartReducer;
