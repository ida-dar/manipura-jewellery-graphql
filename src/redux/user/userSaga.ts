import { AnyAction } from '@reduxjs/toolkit';
import { put, CallEffect, PutEffect, takeLatest, all, call } from 'redux-saga/effects';
import { createUserDocFromAuth, getCurrUser, signInWithGooglePopup, loginUser } from 'src/utils/firebase/firebase';
import { endRequest, errorRequest, startRequest } from 'src/utils/reduxUtils/createAction';
import { USER_ACTION_TYPES } from 'src/utils/reduxUtils/reduxTypes';
import { signInSuccess, signInFail } from './userActions';

/* saga */
export function* getSnapshotFromUserAuth(userAuth: any, details?: any): any {
  try {
    const userSnapshot = yield call(createUserDocFromAuth, userAuth, details);
    console.log('userSnapshot', userSnapshot.data());
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (e) {
    yield put(signInFail(e));
  }
}

export function* isUserAuth(): any {
  try {
    const userAuth = yield call(getCurrUser);
    console.log('userAuth', userAuth);
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (e) {
    yield put(signInFail(e));
  }
}

export function* signInWithGoogle(): any {
  console.log('signInWithGoogle1');
  try {
    console.log('signInWithGoogle2');
    const user = yield call(signInWithGooglePopup);
    console.log('userGoogle', user);
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
    yield put(signInFail(error));
    yield put(errorRequest('user'));
  }
}

export function* onGoogleSignIn(): any {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignIn(): any {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuth);
}

export function* userSaga() {
  yield all([call(onCheckUserSession), call(onGoogleSignIn), call(onEmailSignIn)]);
}
