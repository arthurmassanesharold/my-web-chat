// @flow
import { all, fork } from 'redux-saga/effects';
import { signUpWatcher } from 'pages/SignUp/sagas';
import { signInWatcher } from 'pages/SignIn/sagas';
import { subscribeMessagesSaga } from 'pages/Messages/sagas';

export default function* rootSaga(): Generator<any, void, any> {
  yield all([
    fork(signUpWatcher),
    fork(signInWatcher),
    fork(subscribeMessagesSaga),
  ]);
}
