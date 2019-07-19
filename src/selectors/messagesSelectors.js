// @flow
import { createSelector } from 'reselect';
import { selectData } from 'selectors/rootSelectors';
import _ from 'lodash';

export const selectMessages: State => MapOfMessages = createSelector(
  selectData,
  (data) => data.messages
);

export const selectMessagesByOtherUserEmailSortByDate
: string => State => MapOfMessages = (otherUserEmail: string) => createSelector(
  selectMessages,
  (messages: MapOfMessages) => _.reduce(_.sortBy(_.filter(messages, (message) => (
    message.from === otherUserEmail || message.to === otherUserEmail)), (message) => (message.time.seconds)),
  (mapOfMessages, item) => ({ ...mapOfMessages, [item.id]: item }), {})
);
