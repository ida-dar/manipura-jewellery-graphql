import { AnyAction } from '@reduxjs/toolkit';
import { User } from 'firebase/auth';
import { get } from 'lodash';
import { UserData } from 'src/interfaces';
import { createAction } from 'src/utils/reduxUtils/createAction';
import { STATUS_ACTION_TYPES, UserState, USER_ACTION_TYPES } from 'src/utils/reduxUtils/reduxTypes';

const initialState: UserState = {
  currUser: null as UserData | null,
  // TODO: add request to state
  // request: {
  //   pending: false as boolean,
  //   error: null as Error | null,
  //   success: null,
  // },
};

/* actions */
export const setCurrUser = (user: User | null) => createAction(USER_ACTION_TYPES.SET_USER, user);

/* selector */
export const selectCurrUser = (state: any) => {
  return state.user.currUser;
};

/* reducer */
const userReducer = (state: UserState = initialState, action = {} as AnyAction) => {
  const { type, payload, error } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_USER: {
      const createdAt = new Date(parseInt(get(payload, 'metadata.createdAt'))).toDateString();
      const user = {
        displayName: get(payload, 'displayName'),
        email: get(payload, 'email'),
        createdAt: createdAt,
      };
      return {
        ...state,
        currUser: payload !== null ? user : payload,
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

export default userReducer;
