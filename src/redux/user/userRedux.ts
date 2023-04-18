import { AnyAction } from 'redux';
import { UserData } from 'src/interfaces';
import { UserState } from 'src/utils/reduxUtils/reduxTypes';
import { signInFail, signInSuccess, signOutFailed, signOutSuccess } from './userActions';

const initialState: UserState = {
  currUser: null as UserData | null,
};

/* reducer */
const userReducer = (state: UserState = initialState, action = {} as AnyAction): UserState => {
  if (signInSuccess.match(action)) {
    return {
      ...state,
      currUser: action.payload,
    };
  }

  if (signInFail.match(action)) {
    console.log(action);
    return {
      ...state,
      currUser: null,
    };
  }

  if (signOutSuccess.match(action)) {
    return {
      ...state,
      currUser: null,
    };
  }

  if (signOutFailed.match(action)) {
    return {
      ...state,
      currUser: null,
    };
  }

  return state;
};

export default userReducer;
