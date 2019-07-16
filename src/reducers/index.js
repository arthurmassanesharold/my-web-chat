// @flow
import { combineReducers } from 'redux';
import authenticationReducer from 'pages/SignIn/reducer';
import userListReducer from 'pages/Home/reducer';

const dataReducer = combineReducers({
  userList: userListReducer,
});

const uiReducer = combineReducers({
  authentication: authenticationReducer,
});

export const allReducers = combineReducers({
  data: dataReducer,
  ui: uiReducer,
});
