// @flow
import { type Action, SET_MESSAGES } from 'pages/Messages/actions';

const initialState = {};

const messagesReducer = (state: MapOfMessages = initialState, action: Action): MapOfMessages => {
  switch (action.type) {
    case SET_MESSAGES:
      return ({ ...state, ...action.messages });
    default:
      return (state);
  }
};

export default messagesReducer;
