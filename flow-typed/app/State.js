// @flow

declare type UserInfo = {|
  username?: string,
  email: string,
|}

declare type AuthenticationState = {|
  userInfo: ?UserInfo,
|}

declare type State = {|
  authentication: AuthenticationState,
|};
