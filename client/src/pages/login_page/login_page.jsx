import React, { useState } from 'react';
import Banner from '../../components/banner/banner';
import styles from './login_page.module.css';

const LoginPage = ({ handleLogin, handleSignUp }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [url, setUrl] = useState('');
  const [text, setText] = useState('');
  const [isAlert, setIsAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignUp) {
      handleSignUp(username, password, name, email, url).catch(setError);
    } else {
      handleLogin(username, password).catch(setError);
    }
  };

  const handleOnChange = (event) => {
    const {
      target: { name, value },
    } = event;
    switch (name) {
      case 'username':
        return setUsername(value);
      case 'password':
        return setPassword(value);
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'url':
        return setUrl(value);
      default:
    }
  };

  const handleClick = () => {
    setIsSignUp((prev) => !prev);
  };

  const setError = (error) => {
    setText(error.toString());
    setIsAlert(true);
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Banner text={text} isAlert={isAlert} />
          <img
            className={styles.logo}
            src='images/header_logo.png'
            alt='logo'
          />
          <h1 className={styles.title}>Log in to Twitter </h1>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.input_container}>
            <input
              type='text'
              placeholder=' '
              onChange={handleOnChange}
              required
            />
            <label>Username</label>
          </div>
          <div className={styles.input_container}>
            <input
              type='password'
              placeholder=' '
              onChange={handleOnChange}
              required
            />
            <label>Password</label>
          </div>
          {isSignUp && (
            <>
              <div className={styles.input_container}>
                <input
                  type='text'
                  name='name'
                  onChange={handleOnChange}
                  placeholder=' '
                  required
                />
                <label>Name</label>
              </div>
              <div className={styles.input_container}>
                <input
                  type='email'
                  name='email'
                  onChange={handleOnChange}
                  placeholder=' '
                  required
                />
                <label>Email</label>
              </div>
              <div className={styles.input_container}>
                <input
                  type='url'
                  name='url'
                  onChange={handleOnChange}
                  placeholder=' '
                />
                <label>Image URL</label>
              </div>
            </>
          )}
          <button className={styles.button} type='submit'>
            {isSignUp ? 'Sign Up' : 'Log In'}
          </button>
        </form>
        <span className={styles.link}>
          {isSignUp ? 'Already have an account?' : `Don't have an account?`}
          <a className={styles.signup} onClick={handleClick} href='#'>
            {isSignUp ? 'Log In' : 'Sign Up'}
          </a>
        </span>
      </div>
    </div>
  );
};

export default LoginPage;
