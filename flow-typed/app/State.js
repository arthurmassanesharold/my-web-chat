// @flow

declare type UserInfo = {|
  username?: string,
  email: string,
|}

declare type AuthenticationState = {|
  userInfo: ?UserInfo,
|}

declare type UserList = { [id: string]: UserInfo }

declare type State = {|
  ui: {| authentication: AuthenticationState |},
  data: {| userList: ?UserList |}
|};
