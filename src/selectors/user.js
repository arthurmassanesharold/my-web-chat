// @flow
import { createSelector } from 'reselect';
import { selectUi, selectData } from 'selectors/rootSelectors';

export const selectAuthentication: State => AuthenticationState = createSelector(
  selectUi,
  (ui) => ui.authentication
);

export const selectUserList: State => ?UserList = createSelector(
  selectData,
  (data) => data.userList
);

export const selectUserInfo: State => ?UserInfo = createSelector(
  selectAuthentication,
  (authentication: AuthenticationState) => authentication.userInfo
);
