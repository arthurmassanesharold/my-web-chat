// @flow
import { eventChannel } from 'redux-saga';
import {
  put, select, call, take, takeEvery,
} from 'redux-saga/effects';
import { firestore } from 'config';
import _ from 'lodash';
import { setMessages } from 'pages/Messages/actions';
import { selectUserInfo } from 'selectors/user';

export const CANCEL_WATCH = 'CANCEL_WATCH';
export const SUBSCRIBE_TO_MESSAGES = 'SUBSCRIBE_TO_MESSAGES';

function* handleConversationsUpdate({ messageData }: {| messageData: MapOfMessages |}): Generator<any, void, any> {
  if (_.size(messageData)) yield put(setMessages(messageData));
}

const subscribeMessagesChannel = (loggedUserEmail: string) => (
  eventChannel((emitter) => {
    const messages = firestore.collection('messages')
      .where('userEmails', 'array-contains', loggedUserEmail)
      .onSnapshot((querySnapshot) => {
        const addedMessages = _.filter(querySnapshot.docChanges(),
          (change) => (change.type === 'added'));
        const messageData = _.reduce(
          _.map(addedMessages, (doc) => (doc.doc.data())),
          (acc, item) => ({ ...acc, [item.id]: item }),
          {}
        );
        emitter({ messageData });
      });
    return messages;
  })
);

export function* subscribeMessagesSaga(): Generator<any, void, any> {
  yield take(SUBSCRIBE_TO_MESSAGES);
  const userInfo = yield select(selectUserInfo);
  const channel = yield call(subscribeMessagesChannel, userInfo.email);
  yield takeEvery(channel, handleConversationsUpdate);
  yield take('CANCEL_WATCH');
  channel.close();
}
