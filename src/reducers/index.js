// @flow
import { combineReducers } from 'redux';
import authenticationReducer from 'pages/SignIn/reducer';

export const allReducers = combineReducers({
  authentication: authenticationReducer,
});
