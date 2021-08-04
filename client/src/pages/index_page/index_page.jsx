import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index_page.module.css';

const IndexPage = () => {
  return (
    <div className={styles.background}>
      <section className={styles.left}>
        <img className={styles.logo} src='/images/logo_white.png' alt='logo' />
      </section>
      <section className={styles.right}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Twitter</h1>
          <h1 className={styles.slogan}>It's What's Happening</h1>
          <Link to='/home' className={styles.button}>
            Log In
          </Link>
        </div>
      </section>
    </div>
  );
};

export default IndexPage;
