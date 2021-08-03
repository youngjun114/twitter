import React, { memo, useState } from 'react';
import styles from './tweet_edit_form.module.css';

const TweetEditForm = memo(({ tweet, onUpdate, handleEdit }) => {
  const { id, text } = tweet;
  const [newTweet, setNewTweet] = useState(text);

  const handleOnChange = (e) => {
    setNewTweet(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onUpdate(id, newTweet).then(() => handleEdit());
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <textarea
        onChange={handleOnChange}
        className={styles.tweet_textarea}
        value={newTweet}
        minLength='3'
        maxLength='280'
        autoFocus
      />
      <div className={styles.footer}>
        <button type='submit' className={styles.btn_edit}>
          Edit
        </button>
      </div>
    </form>
  );
});

export default memo(TweetEditForm);
