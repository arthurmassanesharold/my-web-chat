// @flow
import React from 'react';
import Spacer from 'components/Spacer';

const SignInMessage = 'Sign In';
const ButtonMessage = 'Enter';

const SignInPage = () => (
  <>
    <h1>{SignInMessage}</h1>
    <input type="text" placeholder="email" />
    <Spacer size={15} />
    <input type="password" placeholder="password" />
    <Spacer size={15} />
    <button type="submit">{ButtonMessage}</button>
  </>
);

export default SignInPage;
