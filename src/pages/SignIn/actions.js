// @flow
export const SET_IS_LOGGED_IN = 'SET_IS_LOGGED_IN';
export const SET_USER_INFO = 'SET_USER_INFO';

export const setIsLoggedIn = (isLoggedIn: boolean) => ({
  isLoggedIn,
  type: SET_IS_LOGGED_IN,
});

export const setUserInfo = (userInfo: UserInfo) => ({
  type: SET_USER_INFO,
  userInfo,
});

type SetIsLoggedInAction = {|
  isLoggedIn: boolean,
  type: 'SET_IS_LOGGED_IN',
|};

type SetUserInfoAction = {|
  userInfo: UserInfo,
  type: 'SET_USER_INFO'
|};

export type Action =
| SetIsLoggedInAction
| SetUserInfoAction
