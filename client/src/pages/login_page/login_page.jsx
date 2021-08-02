import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/auth_context';
import styles from './login_page.module.css';

const LoginPage = () => {
  const { logIn } = useContext(AuthContext);
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    logIn(username, password).then(() => history.push('/home'));
  };

  const handleUsername = (e) => {
    setUsername(e.currentTarget.value);
  };
  const handlePassword = (e) => {
    setPassword(e.currentTarget.value);
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
          <h1 className={styles.title}>Log in to Twitter </h1>
        </div>
        <form className={styles.form} onSubmit={handleLogin}>
          <div className={styles.input_container}>
            <input
              type='text'
              placeholder=' '
              onChange={handleUsername}
              required
            />
            <label>Username</label>
          </div>
          <div className={styles.input_container}>
            <input
              type='password'
              placeholder=' '
              onChange={handlePassword}
              required
            />
            <label>Password</label>
          </div>

          <button className={styles.button} type='submit'>
            Log In
          </button>
        </form>
        <span className={styles.link}>
          Don't have an account?
          <a className={styles.signup} href='/signup'>
            Sign up
          </a>
        </span>
      </div>
    </div>
  );
};

export default LoginPage;
