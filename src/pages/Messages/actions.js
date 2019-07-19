// @flow
export const SET_MESSAGES = 'SET_MESSAGES';

export const setMessages = (messages: MapOfMessages) => ({
  messages,
  type: SET_MESSAGES,
});

type SetMessagesAction = {|
  messages: MapOfMessages,
  type: 'SET_MESSAGES',
|}

export type Action =
| SetMessagesAction
