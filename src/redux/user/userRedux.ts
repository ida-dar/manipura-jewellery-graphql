import { AnyAction } from '@reduxjs/toolkit';
import { UserData } from 'src/interfaces';
import { STATUS_ACTION_TYPES, UserState, USER_ACTION_TYPES } from 'src/utils/reduxUtils/reduxTypes';

const initialState: UserState = {
  currUser: null as UserData | null,
  request: {
    pending: false as boolean,
    error: null as Error | null,
    success: null,
  },
};

const reducerName = 'user';

/* reducer */
const userReducer = (state: UserState = initialState, action = {} as AnyAction) => {
  const { type, payload, error } = action;

  console.log('userReducer_payload', action);

  switch (type) {
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS: {
      return {
        ...state,
        currUser: payload,
      };
    }
    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS: {
      return {
        ...state,
        currUser: null,
      };
    }
    case USER_ACTION_TYPES.SIGN_IN_FAIL: {
      return {
        ...state,
        currUser: null,
        request: {
          pending: true,
          error: error,
          success: false,
        },
      };
    }
    case `${reducerName}/${STATUS_ACTION_TYPES.START_REQUEST}`:
      return {
        ...state,
        request: {
          pending: true,
          error: null,
          success: false,
        },
      };
    case `${reducerName}/${STATUS_ACTION_TYPES.END_REQUEST}`:
      return {
        ...state,
        request: {
          pending: false,
          error: null,
          success: true,
        },
      };
    case `${reducerName}/${STATUS_ACTION_TYPES.ERROR_REQUEST}`:
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

export default userReducer;
