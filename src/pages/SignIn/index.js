// @flow
import React from 'react';

const SignInMessage = 'Sign In';
const UserNameTitle = 'Username: ';
const PasswordTitle = 'Password: ';
const ButtonMessage = 'Enter';
const UserNameInput = <input type="text" />;
const PasswordInput = <input type="password" />;
const Button = <button type="submit" onClick="alert('hi');">{ButtonMessage}</button>;

const SignInPage = () => (
  <>
    <h1>{SignInMessage}</h1>
    {UserNameTitle}
    {UserNameInput}
    <br />
    <br />
    {PasswordTitle}
    {PasswordInput}
    <br />
    {Button}
  </>
);

export default SignInPage;
