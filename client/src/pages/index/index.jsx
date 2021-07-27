import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './index.module.css';

const Index = () => {
  const history = useHistory();
  return (
    <div className={styles.background}>
      <img className={styles.logo} src='images/logo_white.png' alt='logo' />
      <div className={styles.content}>
        <h1 className={styles.title}>Twitter</h1>
        <h1 className={styles.sub_title}>It's what's happening</h1>
        <div className={styles.buttons}>
          <button className={styles.login}>Log In</button>
          <button className={styles.signup}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Index;
