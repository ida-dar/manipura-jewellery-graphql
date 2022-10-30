import { STATUS_ACTION_TYPES, UserAction, USER_ACTION_TYPES } from 'src/utils/redux/statusActions';

/* action name creator */
const reducerName = 'user';
const createActionName = (name: string) => `app/${reducerName}/${name}`;

/* action types */
const LOGIN_USER = createActionName(USER_ACTION_TYPES.LOGIN_USER);

const START_REQUEST = createActionName(STATUS_ACTION_TYPES.START_REQUEST);
const END_REQUEST = createActionName(STATUS_ACTION_TYPES.END_REQUEST);
const ERROR_REQUEST = createActionName(STATUS_ACTION_TYPES.ERROR_REQUEST);

/* action creators */
export const loginUser = (payload: any) => ({ payload, type: LOGIN_USER });

export const startRequest = (payload: any) => ({ payload, type: START_REQUEST });
export const endRequest = (payload: any) => ({ payload, type: END_REQUEST });
export const errorRequest = (payload: any) => ({ payload, type: ERROR_REQUEST });

/* reducer */
const userReducer = (state: any, action = {} as UserAction) => {
  const { type, payload, error } = action;

  switch (type) {
    case LOGIN_USER: {
      return {
        ...state,
        currUser: payload,
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
      throw new Error(`Unhandled action ${type} in userReducer`);
  }
};

export default userReducer;
