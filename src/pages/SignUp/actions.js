// @flow
export const SIGN_UP = 'SIGN_UP';

export const signUp = (credentials: Credentials) => ({
  credentials,
  type: SIGN_UP,
});
