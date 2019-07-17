// @flow
import { call, put, takeLatest } from 'redux-saga/effects';
import { setUserInfo, SIGN_IN } from 'pages/SignIn/actions';
import { signInWithCredentials } from 'services/firebase/loginWithCredentials';
import fetchUsernameByEmail from 'services/firestore/fetchUsername';

export function* signInWorker({ credentials }: {| credentials: Credentials |}): Generator<any, void, any> {
  try {
    const user = yield call(fetchUsernameByEmail, credentials.email);
    if (!user) throw new Error(`User ${credentials.email} does not exist.`);
    yield call(signInWithCredentials, { ...credentials, username: user.username });
    yield put(setUserInfo({ email: credentials.email, username: user.username }));
  } catch (error) {
    alert(error.message);
  }
}

export function* signInWatcher(): Generator<any, void, any> {
  yield takeLatest(SIGN_IN, signInWorker);
}
