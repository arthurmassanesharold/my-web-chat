// @flow
import { createSelector } from 'reselect';

export const selectAuthentication = (state: State) => state.authentication;

export const selectIsLoggedIn: State => boolean = createSelector(
  selectAuthentication,
  (authentication: AuthenticationState) => authentication.isLoggedIn
);

export const selectUserInfo: State => UserInfo = createSelector(
  selectAuthentication,
  (authentication: AuthenticationState) => authentication.userInfo
);
