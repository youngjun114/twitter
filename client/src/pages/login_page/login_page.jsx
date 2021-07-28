import React, { useRef } from 'react';
import styles from './login_page.module.css';

const LoginPage = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const formRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
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
        <form ref={formRef} className={styles.form} onSubmit={handleLogin}>
          <div className={styles.input_container}>
            <input ref={usernameRef} type='text' placeholder=' ' required />
            <label>Username</label>
          </div>
          <div className={styles.input_container}>
            <input ref={passwordRef} type='password' placeholder=' ' required />
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
