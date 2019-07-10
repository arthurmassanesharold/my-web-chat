// @flow
import { SET_IS_LOGGED_IN, type Action, SET_USER_INFO } from 'pages/SignIn/actions';

const initialState = { isLoggedIn: false, userInfo: null };

const authenticationReducer = (state: AuthenticationState = initialState, action: Action): AuthenticationState => {
  switch (action.type) {
    case SET_IS_LOGGED_IN:
      return ({ ...state, isLoggedIn: action.isLoggedIn });
    case SET_USER_INFO:
      return ({ ...state, userInfo: action.userInfo });
    default:
      return (state);
  }
};

export default authenticationReducer;
