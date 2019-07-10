// @flow
import React, { useState } from 'react';
import { connect } from 'react-redux';
import Spacer from 'components/Spacer';
import EmailInput from 'components/EmailInput';
import PasswordInput from 'components/PasswordInput';
import firebase from 'config';
import { setIsLoggedIn, setUserInfo, type Action } from 'pages/SignIn/actions';

const mapDispatchToProps = {
  setIsLoggedIn,
  setUserInfo,
};

type Props = {|
  setIsLoggedIn: (isLoggedIn: boolean) => Action,
  setUserInfo: (userInfo: UserInfo) => Action,
|}

const styles = {
  box: {
    color: 'darkgreen',
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'green',
    border: '2px solid darkgreen',
    borderRadius: '2px',
    color: 'white',
    fontSize: '20px',
  },
};

type Credentials = {|
  email: string,
  password: string,
|}

const SignInMessage = 'Sign In';
const ButtonMessage = 'Enter';

const SignInPage = (props: Props) => {
  const [credentials, setCredentials] = useState<Credentials>({ email: '', password: '' });
  const updateInput = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };
  const signIn = async (event) => {
    try {
      event.preventDefault();
      await firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password);
      setCredentials({ email: '', password: '' });
      props.setIsLoggedIn(true);
      props.setUserInfo({ email: credentials.email });
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <>
      <div style={styles.box}>
        <h1>{SignInMessage}</h1>
        <form onSubmit={signIn}>
          <EmailInput email={credentials.email} updateInput={updateInput} />
          <Spacer size={15} />
          <PasswordInput password={credentials.password} updateInput={updateInput} />
          <Spacer size={15} />
          <button className="signInButton" type="submit" style={styles.button}>{ButtonMessage}</button>
        </form>
      </div>
    </>
  );
};

export default connect(null, mapDispatchToProps)(SignInPage);
