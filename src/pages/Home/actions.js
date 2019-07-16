// @flow
export const SET_USER_LIST = 'SET_USER_LIST';

export const setUserList = (userList: UserList) => ({
  type: SET_USER_LIST,
  userList,
});

type SetUserListAction = {|
  userList: UserList,
  type: 'SET_USER_LIST'
|};

export type Action =
| SetUserListAction
