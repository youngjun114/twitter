import React from 'react';
import styles from './index_page.module.css';

const IndexPage = () => {
  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <img className={styles.logo} src='images/logo_white.png' alt='logo' />
        <div className={styles.content}>
          <h1 className={styles.title}>Twitter</h1>
          <h1 className={styles.sub_title}>It's what's happening</h1>
          <div className={styles.buttons}>
            <a href='/login' className={styles.login}>
              Log In
            </a>
            <a href='/signup' className={styles.signup}>
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
