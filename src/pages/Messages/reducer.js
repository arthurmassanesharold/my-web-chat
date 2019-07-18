// @flow
import { type Action, SET_MESSAGES } from 'pages/Messages/actions';

const initialState = [];

const messagesReducer = (state: Array<Message> = initialState, action: Action): Array<Message> => {
  switch (action.type) {
    case SET_MESSAGES:
      return (action.messages);
    default:
      return (state);
  }
};

export default messagesReducer;
