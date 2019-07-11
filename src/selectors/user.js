// @flow
import { createSelector } from 'reselect';

export const selectAuthentication = (state: State) => state.authentication;

export const selectUserInfo: State => ?UserInfo = createSelector(
  selectAuthentication,
  (authentication: AuthenticationState) => authentication.userInfo
);
