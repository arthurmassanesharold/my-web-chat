// @flow
import { combineReducers } from 'redux';
import authenticationReducer from 'pages/SignIn/reducer';
import userListReducer from 'pages/Home/reducer';
import selectedUserForConversationReducer from 'pages/Home/selectedUserReducer';
import messagesReducer from 'pages/Messages/reducer';

const dataReducer = combineReducers({
  messages: messagesReducer,
  userList: userListReducer,
});

const uiReducer = combineReducers({
  authentication: authenticationReducer,
  selectedUserForConversation: selectedUserForConversationReducer,
});

export const allReducers = combineReducers({
  data: dataReducer,
  ui: uiReducer,
});
