import React, { memo } from 'react';
import moment from 'moment';
import styles from './tweet_card.module.css';
import { RiDeleteBin6Line, RiEdit2Line } from 'react-icons/ri';

const TweetCard = memo(({ tweet, isAuthor, onDelete, onUpdate }) => {
  const { id, username, name, url, text, createdAt } = tweet;

  const formattedCreatedAt = moment(createdAt).fromNow();

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <section className={styles.container}>
      <img src='images/avatar.png' alt='avatar' className={styles.avatar} />
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.name}>{name}</h2>
          <span
            className={styles.username}
          >{`@${username} • ${formattedCreatedAt}`}</span>
          {isAuthor && (
            <div className={styles.buttons}>
              <button className={styles.btn_edit}>
                <RiEdit2Line className={styles.icon} />
              </button>
              <button className={styles.btn_delete} onClick={handleDelete}>
                <RiDeleteBin6Line className={styles.icon} />
              </button>
            </div>
          )}
        </div>
        <p className={styles.text}>{text}</p>
      </div>
    </section>
  );
});

export default memo(TweetCard);
