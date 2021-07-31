import React from 'react';
import Header from '../../components/header/header';
import Sidebar from '../../components/sidebar/sidebar';
import Tweets from '../../components/tweets/tweets';
import styles from './home_page.module.css';

const HomePage = ({ tweetService }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.left}>
        <Sidebar />
      </div>
      <div className={styles.center}>
        <div className={styles.header}>
          <Header />
        </div>
        <Tweets tweetService={tweetService} />
      </div>
      <div className={styles.right}></div>
    </div>
  );
};

export default HomePage;
