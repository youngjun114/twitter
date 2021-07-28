import React from 'react';
import { useRef } from 'react';
import styles from './signup_page.module.css';

const SignupPage = () => {
  const handleSignup = (e) => {
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
          <h1 className={styles.title}>Create an account</h1>
        </div>
        <form className={styles.form} onSubmit={handleSignup}>
          <div className={styles.input_container}>
            <input type='text' placeholder=' ' required />
            <label>Username</label>
          </div>
          <div className={styles.input_container}>
            <input type='password' placeholder=' ' required />
            <label>Password</label>
          </div>
          <div className={styles.input_container}>
            <input type='email' placeholder=' ' required />
            <label>Email</label>
          </div>
          <div className={styles.input_container}>
            <input type='url' placeholder=' ' />
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
