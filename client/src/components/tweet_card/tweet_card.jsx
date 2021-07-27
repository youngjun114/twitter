import React from 'react';
import styles from './tweet_card.module.css';

const TweetCard = ({ tweet }) => {
  return (
    <section className={styles.container}>
      <img src='images/avatar.png' alt='avatar' className={styles.avatar} />
      <div className={styles.content}>
        <h2 className={styles.username}>{tweet.username}</h2>
        <span className={styles.time_stamp}> • 2 days ago</span>
        <p className={styles.text}>{tweet.text}</p>
      </div>
    </section>
  );
};

export default TweetCard;
