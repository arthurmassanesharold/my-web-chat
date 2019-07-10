// @flow

declare type UserInfo = {|
  username? : string,
  email? : string,
|}

declare type AuthenticationState = {|
  isLoggedIn: boolean,
  userInfo: ?UserInfo,
|}

declare type State = {|
  authentication: AuthenticationState,
|};
