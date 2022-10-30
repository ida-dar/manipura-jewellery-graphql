import { STATUS_ACTION_TYPES, USER_ACTION_TYPES } from 'src/utils/redux/statusActions';

/* reducer */
const userReducer = (state: any, action = {} as any) => {
  const { type, payload, error } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_USER: {
      return {
        ...state,
        currUser: payload,
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
      throw new Error(`Unhandled action ${type} in userReducer`);
  }
};

export default userReducer;
