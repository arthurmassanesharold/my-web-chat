// @flow
import { all, fork } from 'redux-saga/effects';
import { signUpWatcher } from 'pages/SignUp/sagas';
import { signInWatcher } from 'pages/SignIn/sagas';

export default function* rootSaga(): Generator<any, void, any> {
  yield all([
    fork(signUpWatcher),
    fork(signInWatcher),
  ]);
}
