// @flow
export const SET_USER_INFO = 'SET_USER_INFO';

export const setUserInfo = (userInfo: ?UserInfo) => ({
  type: SET_USER_INFO,
  userInfo,
});

type SetUserInfoAction = {|
  userInfo: UserInfo,
  type: 'SET_USER_INFO'
|};

export type Action =
| SetUserInfoAction
