import React, { memo, useState } from 'react';
import styles from './tweet_add_form.module.css';

const TweetAddForm = memo(({ tweetService, onError }) => {
  const [tweet, setTweet] = useState('');

  const handleChange = (e) => {
    setTweet(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    tweetService
      .postTweet(tweet) //
      .then((created) => {
        setTweet('');
      })
      .catch(onError);
  };

  return (
    <section className={styles.container}>
      <img src='images/avatar.png' alt='avatar' className={styles.avatar} />
      <form className={styles.content} onSubmit={onSubmit}>
        <textarea
          onChange={handleChange}
          className={styles.tweet_textarea}
          value={tweet}
          minLength='3'
          maxLength='280'
          placeholder={`What's happening?`}
        />
        <div className={styles.footer}>
          <button type='submit' className={styles.btn_tweet}>
            Tweet
          </button>
        </div>
      </form>
    </section>
  );
});

export default memo(TweetAddForm);
