// @flow
import { type Action, SET_USER_LIST } from 'pages/Home/actions';

const initialState: UserList = {};

const userListReducer = (state: UserList = initialState, action: Action): UserList => {
  switch (action.type) {
    case SET_USER_LIST:
      return ({ ...state, ...action.userList });
    default:
      return (state);
  }
};

export default userListReducer;
