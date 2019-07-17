// @flow
import { call, takeLatest, put } from 'redux-saga/effects';
import { SIGN_UP } from 'pages/SignUp/actions';
import {
  createUserWithCredentials, addUserToFirestore,
} from 'services/firebase/loginWithCredentials';
import { signIn } from 'pages/SignIn/actions';

function* signUpWorker({ credentials }: {| credentials: Credentials |}) {
  try {
    const { user } = yield call(createUserWithCredentials, credentials);
    yield call(addUserToFirestore, { login: credentials, uid: user.uid });
    yield put(signIn(credentials));
  } catch (error) {
    console.error(error);
  }
}

export function* signUpWatcher(): Generator<any, void, any> {
  yield takeLatest(SIGN_UP, signUpWorker);
}
