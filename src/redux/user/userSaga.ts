import { put, takeLatest, all, call } from 'redux-saga/effects';
import {
  createUserDocFromAuth,
  getCurrUser,
  signInWithGooglePopup,
  loginUser,
  registerUser,
  logoutUser,
} from 'src/utils/firebase/firebase';
import { endRequest, errorRequest, startRequest } from 'src/utils/reduxUtils/createAction';
import { USER_ACTION_TYPES } from 'src/utils/reduxUtils/reduxTypes';
import { signInSuccess, signInFail, signUpFail, signUpSucces, signOutSuccess, signOutFailed } from './userActions';

/* saga */
export function* getSnapshotFromUserAuth(userAuth: any, details?: any): any {
  try {
    const userSnapshot = yield call(createUserDocFromAuth, userAuth, details);
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (e) {
    yield put(signInFail(e));
  }
}

export function* isUserAuth(): any {
  try {
    const userAuth = yield call(getCurrUser);
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (e) {
    yield put(signInFail(e));
  }
}

/**
 * Sign in (login)
 */

export function* signInWithGoogle(): any {
  try {
    const user = yield call(signInWithGooglePopup);
    yield call(getSnapshotFromUserAuth, user);
  } catch (e) {
    yield put(signInFail(e));
  }
}

export function* signInWithEmail({ payload }: any): any {
  try {
    yield put(startRequest('user'));
    const { email, password } = payload;
    const { user } = yield call(loginUser, email, password);
    yield call(getSnapshotFromUserAuth, user);
    yield put(endRequest('user'));
  } catch (error) {
    yield put(errorRequest('user'));
  }
}

/**
 * Sign up (register)
 */

export function* signUp({ payload }: any) {
  try {
    const { email, password, displayName } = payload;
    const { user } = yield call(registerUser, email, password);
    yield put(signUpSucces(user, { displayName }));
  } catch (e) {
    yield put(signUpFail(e));
  }
}

export function* signInAfterSignUp({ payload }: any) {
  try {
    const { user, displayName } = payload;
    yield call(getSnapshotFromUserAuth, user, displayName);
  } catch (e) {
    yield put(signInFail(e));
  }
}

/**
 * Sign out (logout)
 */
export function* signOut() {
  try {
    yield call(logoutUser);
    yield put(signOutSuccess());
  } catch (e) {
    yield put(signOutFailed(e));
  }
}

export function* onGoogleSignIn(): any {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignIn(): any {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignUpStart(): any {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess(): any {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuth);
}

export function* onSignOutStart(): any {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* userSaga() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignIn),
    call(onEmailSignIn),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ]);
}
