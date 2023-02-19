import { AnyAction } from '@reduxjs/toolkit';
import { UserData } from 'src/interfaces';
import { UserState, USER_ACTION_TYPES } from 'src/utils/reduxUtils/reduxTypes';

const initialState: UserState = {
  currUser: null as UserData | null,
  request: {
    pending: false as boolean,
    error: null as Error | null,
    success: null,
  },
};

/* reducer */
const userReducer = (state: UserState = initialState, action = {} as AnyAction) => {
  const { type, payload, error } = action;

  switch (type) {
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS: {
      return {
        ...state,
        currUser: payload,
        request: {
          pending: false,
          error: null,
          success: true,
        },
      };
    }
    case USER_ACTION_TYPES.SIGN_IN_FAIL: {
      return {
        ...state,
        currUser: null,
        request: {
          pending: false,
          error: error,
          success: false,
        },
      };
    }
    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS: {
      return {
        ...state,
        currUser: null,
        request: {
          pending: false,
          error: null,
          success: true,
        },
      };
    }
    case USER_ACTION_TYPES.SIGN_OUT_FAIL: {
      return {
        ...state,
        currUser: null,
        request: {
          pending: false,
          error: error,
          success: false,
        },
      };
    }
    default:
      return state;
  }
};

export default userReducer;
