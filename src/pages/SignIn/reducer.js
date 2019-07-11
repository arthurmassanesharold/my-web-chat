// @flow
import { type Action, SET_USER_INFO } from 'pages/SignIn/actions';

const initialState = { userInfo: null };

const authenticationReducer = (state: AuthenticationState = initialState, action: Action): AuthenticationState => {
  switch (action.type) {
    case SET_USER_INFO:
      return ({ ...state, userInfo: action.userInfo });
    default:
      return (state);
  }
};

export default authenticationReducer;
