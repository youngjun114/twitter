import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { AuthContext } from '../../context/auth_context';
import styles from './signup_page.module.css';

const SignupPage = () => {
  const { signUp } = useContext(AuthContext);
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [url, setUrl] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    signUp(username, password, name, email, url) //
      .then(history.push('/home'));
  };

  const handleOnChangeUsername = (e) => {
    setUsername(e.currentTarget.value);
  };
  const handleOnChangePassword = (e) => {
    setPassword(e.currentTarget.value);
  };
  const handleOnChangeName = (e) => {
    setName(e.currentTarget.value);
  };
  const handleOnChangeEmail = (e) => {
    setEmail(e.currentTarget.value);
  };
  const handleOnChangeUrl = (e) => {
    setUrl(e.currentTarget.value);
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <img
            className={styles.logo}
            src='images/header_logo.png'
            alt='logo'
          />
          <h1 className={styles.title}>Create an account</h1>
        </div>
        <form className={styles.form} onSubmit={handleSignup}>
          <div className={styles.input_container}>
            <input
              type='text'
              name='username'
              onChange={handleOnChangeUsername}
              placeholder=' '
              required
            />
            <label>Username</label>
          </div>
          <div className={styles.input_container}>
            <input
              type='password'
              name='password'
              onChange={handleOnChangePassword}
              placeholder=' '
              required
            />
            <label>Password</label>
          </div>
          <div className={styles.input_container}>
            <input
              type='text'
              name='name'
              onChange={handleOnChangeName}
              placeholder=' '
              required
            />
            <label>Name</label>
          </div>
          <div className={styles.input_container}>
            <input
              type='email'
              name='email'
              onChange={handleOnChangeEmail}
              placeholder=' '
              required
            />
            <label>Email</label>
          </div>
          <div className={styles.input_container}>
            <input
              type='url'
              name='url'
              onChange={handleOnChangeUrl}
              placeholder=' '
            />
            <label>Image URL</label>
          </div>
          <button className={styles.button} type='submit'>
            Sign Up
          </button>
        </form>
        <span className={styles.link}>
          Already have an account?
          <a className={styles.signup} href='/login'>
            Log In
          </a>
        </span>
      </div>
    </div>
  );
};

export default SignupPage;
