import React from 'react';

const SignInPage = () => (
  <>
    <h1>Sign In</h1>
    <form>
      <label for="name">Username: </label>
      <input type="text" name="name" />
      <button>Enter</button>
    </form>
  </>
);

export default SignInPage;