import React from 'react';
import styles from './login_page.module.css';

const LoginPage = () => {
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
        <form className={styles.form}>
          <input
            className={styles.input}
            placeholder='Username'
            required
          ></input>
          <input
            className={styles.input}
            placeholder='Password'
            required
          ></input>
          <button className={styles.button} type='submit'>
            Log In
          </button>
        </form>
        <span className={styles.link}>
          Don't have an account? <a className={styles.signup} href='/signup'>Sign up</a>
        </span>
      </div>
    </div>
  );
};

export default LoginPage;
