// @flow
export const SET_MESSAGES = 'SET_MESSAGES';

export const setMessages = (messages: Array<Message>) => ({
  messages,
  type: SET_MESSAGES,
});

type setMessagesAction = {|
  messages: Array<Message>,
  type: 'SET_MESSAGES',
|}

export type Action =
| setMessagesAction
