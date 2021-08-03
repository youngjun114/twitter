import React, { memo } from 'react';
import styles from './tweet_card.module.css';

const TweetCard = memo(({ tweet, isAuthor, handleDelete, handleUpdate }) => {
  const { id, username, name, url, text, createdAt } = tweet;
  return (
    <section className={styles.container}>
      <img src='images/avatar.png' alt='avatar' className={styles.avatar} />
      <div className={styles.content}>
        <h2 className={styles.name}>{name}</h2>
        <span className={styles.username}>@{username}</span>
        <p className={styles.text}>{text}</p>
      </div>
    </section>
  );
});

export default memo(TweetCard);
