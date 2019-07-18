// @flow
export const SET_USER_LIST = 'SET_USER_LIST';
export const SET_SELECTED_USER_FOR_CONVERSATION = 'SET_SELECTED_USER_FOR_CONVERSATION';

export const setselectedUserForConversation = (selectedUserForConversation: ?UserInfo) => ({
  selectedUserForConversation,
  type: SET_SELECTED_USER_FOR_CONVERSATION,
});

type setselectedUserForConversationAction = {|
  selectedUserForConversation: ?UserInfo,
  type: 'SET_SELECTED_USER_FOR_CONVERSATION',
|}

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
| setselectedUserForConversationAction
