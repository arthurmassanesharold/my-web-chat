// @flow
import React, { useState } from 'react';
import EmailInput from 'components/EmailInput';
import { connect } from 'react-redux';
import PasswordInput from 'components/PasswordInput';
import Spacer from 'components/Spacer';
import { setUserInfo, signIn } from 'pages/SignIn/actions';
import { selectUserInfo } from 'selectors/user';
import { Redirect } from 'react-router-dom';
import * as ROUTES from 'constants/routes';
import UsernameInput from 'components/UsernameInput';
import { signUp } from 'pages/SignUp/actions';

const mapStateToProps = (state: State) => ({
  userInfo: selectUserInfo(state),
});

const mapDispatchToProps = {
  setUserInfo,
  signIn,
  signUp,
};

type ComponentProps = {|
  userInfo: UserInfo,
|}

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

const SignUpPage = (props: Props) => {
  const [credentials, setCredentials] = useState<Credentials>({ email: '', password: '', username: '' });
  const { userInfo } = props;
  if (userInfo) return (<Redirect to={ROUTES.HOME} />);
  const updateInput = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  const addUser = async (event) => {
    try {
      event.preventDefault();
      props.signUp(credentials);
      setCredentials({ email: '', password: '', username: '' });
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
          <UsernameInput username={credentials.username} updateInput={updateInput} />
          <Spacer size={15} />
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
