// @flow
import { createSelector } from 'reselect';
import { selectData } from 'selectors/rootSelectors';
import _ from 'lodash';

export const selectMessages: State => Array<Message> = createSelector(
  selectData,
  (data) => data.messages
);

export const selectMessagesByOtherUserEmailSortByDate
: string => State => Array<Message> = (otherUserEmail: string) => createSelector(
  selectMessages,
  (messages: Array<Message>) => _.sortBy(_.filter(messages, (message) => (
    message.from === otherUserEmail || message.to === otherUserEmail)), (message) => (message.time.seconds))
);
