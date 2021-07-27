import React, { useEffect, useRef } from 'react';
import styles from './tweet_add_form.module.css';
import autosize from 'autosize';

const TweetAddForm = () => {
  const textAreaRef = useRef();
  useEffect(() => {
    autosize(textAreaRef.current);
  }, [textAreaRef]);
  return (
    <section className={styles.container}>
      <img src='images/avatar.png' alt='avatar' className={styles.avatar} />
      <div className={styles.content}>
        <textarea
          ref={textAreaRef}
          className={styles.tweet_textarea}
          minLength='3'
          maxLength='280'
          placeholder='what&#39;s happening?'
        />
        <div className={styles.footer}>
          <button className={styles.btn_tweet}>Tweet</button>
        </div>
      </div>
    </section>
  );
};

export default TweetAddForm;
