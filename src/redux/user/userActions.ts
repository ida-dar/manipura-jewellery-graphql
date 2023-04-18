import { createAction, withMatcher } from 'src/utils/reduxUtils/createAction';
import { User } from 'firebase/auth';
import {
  CheckUserSession,
  SetEmailSignIn,
  SetGoogleSignIn,
  SetUser,
  SignInFail,
  SignInSuccess,
  SignOutFail,
  SignOutStart,
  SignOutSuccess,
  SignUpFail,
  SignUpStart,
  SignUpSuccess,
  USER_ACTION_TYPES,
} from 'src/utils/reduxUtils/reduxTypes';

/* actions */
export const setCurrUser = withMatcher((user: User | null): SetUser => createAction(USER_ACTION_TYPES.SET_USER, user));

export const checkUserSession = withMatcher((): CheckUserSession => createAction(USER_ACTION_TYPES.CHECK_USER_SESSION));

// login
export const googleSignIn = withMatcher((): SetGoogleSignIn => createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START));

export const emailSignIn = withMatcher((email: string, password: string): SetEmailSignIn => {
  return createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password });
});

export const signInSuccess = withMatcher(
  (user: any): SignInSuccess => createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user)
);

export const signInFail = withMatcher((error: any): SignInFail => createAction(USER_ACTION_TYPES.SIGN_IN_FAIL, error));

// logout
export const signOutStart = withMatcher((): SignOutStart => createAction(USER_ACTION_TYPES.SIGN_OUT_START));

export const signOutSuccess = withMatcher((): SignOutSuccess => createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS));

export const signOutFailed = withMatcher((error: any): SignOutFail => createAction(USER_ACTION_TYPES.SIGN_OUT_FAIL, error));

//register
export const signUpStart = withMatcher(
  (email: string, password: string, displayName: string): SignUpStart =>
    createAction(USER_ACTION_TYPES.SIGN_UP_START, { email, password, displayName })
);

export const signUpSucces = withMatcher(
  (user: any, additionalDetails: any): SignUpSuccess =>
    createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalDetails })
);

export const signUpFail = withMatcher((error: any): SignUpFail => createAction(USER_ACTION_TYPES.SIGN_UP_FAIL, error));
