import React, { memo } from 'react';
import styles from './sidebar.module.css';
import { Link } from 'react-router-dom';
import { FaTwitter } from 'react-icons/fa';

const Sidebar = memo(() => {
  return (
    <>
      <ul className={styles.sidebar_container}>
        <li>
          <Link to='/home' className={styles.sidebar_item}>
            <FaTwitter
              className={`${styles.sidebar_icon} ${styles.sidebar_logo}`}
            />
          </Link>
        </li>
      </ul>
    </>
  );
});

export default memo(Sidebar);
