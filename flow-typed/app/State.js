// @flow

declare type Credentials = {|
  username: string,
  email: string,
  password: string,
|}

declare type UserInfo = {|
  username?: string,
  email: string,
|}

declare type AuthenticationState = {|
  userInfo: ?UserInfo,
|}

declare type UserList = { [id: string]: UserInfo }

declare type State = {|
  ui: {| authentication: AuthenticationState, selectedUserForConversation: ?UserInfo |},
  data: {| userList: ?UserList |}
|};
