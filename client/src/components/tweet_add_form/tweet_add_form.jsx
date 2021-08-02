import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from './tweet_add_form.module.css';
import { useAuth } from '../../context/auth_context';
import autosize from 'autosize';

const TweetAddForm = ({ tweetService }) => {
  const [tweet, setTweet] = useState('');
  const textAreaRef = useRef();
  const { user } = useAuth();

  const handleChange = (e) => {
    setTweet(e.target.value);
  };

  const handlePost = async (e) => {
    e.preventDefault();
    tweetService
      .postTweet(tweet) //
      .then((created) => {
        setTweet('');
      })
      .catch(console.error);
  };

  useEffect(() => {
    autosize(textAreaRef.current);
  }, [textAreaRef]);

  return (
    <section className={styles.container}>
      <img src='images/avatar.png' alt='avatar' className={styles.avatar} />
      <form className={styles.content}>
        <textarea
          onChange={handleChange}
          className={styles.tweet_textarea}
          value={tweet}
          minLength='3'
          maxLength='280'
          placeholder='what&#39;s happening?'
        />
        <div className={styles.footer}>
          <button
            type='submit'
            className={styles.btn_tweet}
            onClick={handlePost}
          >
            Tweet
          </button>
        </div>
      </form>
    </section>
  );
};

export default TweetAddForm;
