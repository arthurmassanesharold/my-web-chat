// @flow
import React, { useState } from 'react';
import { connect } from 'react-redux';
import Spacer from 'components/Spacer';
import EmailInput from 'components/EmailInput';
import PasswordInput from 'components/PasswordInput';
import firebase from 'config';
import fetchUsernameByEmail from 'services/firestore/fetchUsername.js';
import { setUserInfo } from 'pages/SignIn/actions';
import { selectUserInfo } from 'selectors/user';
import * as ROUTES from 'constants/routes';
import { Redirect } from 'react-router-dom';

const mapStateToProps = (state: State) => ({
  userInfo: selectUserInfo(state),
});

type ComponentProps = {|
  userInfo: UserInfo,
|}

const mapDispatchToProps = {
  setUserInfo,
};

type Props = {|
  ...$ExtractObject<typeof mapDispatchToProps>,
  ...ComponentProps,
  ...$ExtractReturn<typeof mapStateToProps>
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

const SignInPage = (props: Props) => {
  const SignInMessage = 'Sign In';
  const ButtonMessage = 'Enter';
  const [credentials, setCredentials] = useState<Credentials>({ email: '', password: '' });
  const { userInfo } = props;
  if (userInfo) return (<Redirect to={ROUTES.HOME} />);
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
      const user = await fetchUsernameByEmail(credentials.email);
      props.setUserInfo({ email: credentials.email, username: user.username });
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

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);
