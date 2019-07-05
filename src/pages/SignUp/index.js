// @flow
import React from 'react';

const SignUpMessage = 'Sign Up';
const ButtonMessage = 'Enter';
const Button = <button type="submit">{ButtonMessage}</button>;

const SignupPage = () => (
  <>
    <h1>{SignUpMessage}</h1>
    {Button}
  </>
);
export default SignupPage;
