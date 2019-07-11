// @flow
import React, { useState } from 'react';
import EmailInput from 'components/EmailInput';
import { connect } from 'react-redux';
import PasswordInput from 'components/PasswordInput';
import { firestore } from 'config';
import firebase from 'firebase';
import Spacer from 'components/Spacer';
import { setUserInfo } from 'pages/SignIn/actions';

const mapDispatchToProps = {
  setUserInfo,
};

type Props = {|
  ...$ExtractObject<typeof mapDispatchToProps>
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

const SignUpPage = (props: Props) => {
  const [credentials, setCredentials] = useState<Credentials>({ email: '', password: '' });
  const updateInput = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  const addUser = async (event) => {
    try {
      event.preventDefault();
      await firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password);
      await firestore.collection('users').add({
        email: credentials.email,
      });
      setCredentials({ email: '', password: '' });
      await firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password);
      props.setUserInfo({ email: credentials.email });
    } catch (error) {
      alert(error.message);
    }
  };
  const SignUpMessage = 'Sign Up';
  const ButtonMessage = 'Enter';
  return (
    <>
      <div style={styles.box}>
        <h1>{SignUpMessage}</h1>
        <form onSubmit={addUser}>
          <EmailInput email={credentials.email} updateInput={updateInput} />
          <Spacer size={15} />
          <PasswordInput password={credentials.password} updateInput={updateInput} />
          <Spacer size={15} />
          <button type="submit" style={styles.button}>{ButtonMessage}</button>
        </form>
      </div>
    </>
  );
};

export default connect(null, mapDispatchToProps)(SignUpPage);
