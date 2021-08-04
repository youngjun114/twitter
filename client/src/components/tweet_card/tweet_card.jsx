import React, { memo, useState } from 'react';
import { RiDeleteBin6Line, RiEdit2Line, RiCloseFill } from 'react-icons/ri';
import moment from 'moment';
import { Link, useHistory } from 'react-router-dom';
import styles from './tweet_card.module.css';
import Avatar from '../avatar/avatar';
import TweetEditForm from '../tweet_edit_form/tweet_edit_form';

const TweetCard = memo(({ tweet, isAuthor, onDelete, onUpdate }) => {
  const { id, username, name, url, text, createdAt } = tweet;
  const [edit, setEdit] = useState(false);
  const formattedCreatedAt = moment(createdAt).fromNow();
  const history = useHistory();

  const handleDelete = () => {
    if (window.confirm('Do you want to delete the post?')) {
      onDelete(id);
    }
  };

  const handleEdit = () => {
    setEdit((edit) => !edit);
  };

  return (
    <section className={styles.container}>
      <Avatar url={url} />
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.header_left}>
            <h2 className={styles.name}>{name}</h2>
            <span className={styles.time_stamp}>
              <Link
                to={`/home/${username}`}
                className={styles.username}
              >{`@${username}`}</Link>
              {`•${formattedCreatedAt}`}
            </span>
          </div>
          {isAuthor && (
            <div className={styles.buttons}>
              {!edit && (
                <>
                  <button className={styles.btn_edit} onClick={handleEdit}>
                    <RiEdit2Line className={styles.icon} />
                  </button>
                  <button className={styles.btn_delete} onClick={handleDelete}>
                    <RiDeleteBin6Line className={styles.icon} />
                  </button>
                </>
              )}
              {edit && (
                <button className={styles.btn_close} onClick={handleEdit}>
                  <RiCloseFill className={styles.icon} />
                </button>
              )}
            </div>
          )}
        </div>
        {!edit && <p className={styles.text}>{text}</p>}
        {edit && (
          <TweetEditForm
            tweet={tweet}
            onUpdate={onUpdate}
            handleEdit={handleEdit}
          />
        )}
      </div>
    </section>
  );
});

export default memo(TweetCard);
