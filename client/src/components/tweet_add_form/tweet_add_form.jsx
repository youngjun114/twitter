import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from './tweet_add_form.module.css';
import { AuthContext } from '../../context/auth_context';
import autosize from 'autosize';

const TweetAddForm = ({ tweetService }) => {
  const [text, setText] = useState('');
  const textAreaRef = useRef();
  const { user } = useContext(AuthContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handlePost = () => {
    tweetService.postTweet(text);
  };

  useEffect(() => {
    autosize(textAreaRef.current);
  }, [textAreaRef]);

  return (
    <section className={styles.container}>
      <img src='images/avatar.png' alt='avatar' className={styles.avatar} />
      <div className={styles.content}>
        <textarea
          onChange={handleChange}
          className={styles.tweet_textarea}
          minLength='3'
          maxLength='280'
          placeholder='what&#39;s happening?'
        />
        <div className={styles.footer}>
          <button className={styles.btn_tweet} onClick={handlePost}>
            Tweet
          </button>
        </div>
      </div>
    </section>
  );
};

export default TweetAddForm;
