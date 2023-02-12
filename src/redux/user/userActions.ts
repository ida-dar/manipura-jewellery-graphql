import { createAction } from 'src/utils/reduxUtils/createAction';
import { User } from 'firebase/auth';
import { USER_ACTION_TYPES } from 'src/utils/reduxUtils/reduxTypes';

/* actions */
export const setCurrUser = (user: User | null) => createAction(USER_ACTION_TYPES.SET_USER, user);

export const checkUserSession = () => createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

// login
export const googleSignIn = () => createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);

export const emailSignIn = ({ email, password }: any) =>
  createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password });

export const signInSuccess = (user: any) => createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);

export const signInFail = (error: any) => createAction(USER_ACTION_TYPES.SIGN_IN_FAIL, error);

// logout
export const signOutSuccess = () => createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);

export const signOutFailed = (error: any) => createAction(USER_ACTION_TYPES.SIGN_OUT_FAIL, error);

//register
export const signUpUser = (email: string, password: string, displayName: string) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { email, password, displayName });

export const signUpFail = (error: any) => createAction(USER_ACTION_TYPES.SIGN_UP_FAIL, error);
