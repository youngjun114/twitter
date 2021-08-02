import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/header/header';
import Sidebar from '../../components/sidebar/sidebar';
import Tweets from '../../components/tweets/tweets';
import TweetAddForm from '../../components/tweet_add_form/tweet_add_form';
import { useAuth } from '../../context/auth_context';
import styles from './home_page.module.css';

const HomePage = ({ tweetService }) => {
  const history = useHistory();
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    if (window.confirm('Do you want to log out?')) {
      logOut();
      history.push('/');
    }
  };

  useEffect(() => {
    if (!user) {
      history.push('/login');
    } else {
      console.log(`Welcome ${user.username}`);
    }
  }, [user]);

  return (
    <div className={styles.layout}>
      <div className={styles.left}>
        <Sidebar handleLogOut={handleLogOut} />
      </div>
      <div className={styles.center}>
        <div className={styles.header}>
          <Header />
        </div>
        <TweetAddForm tweetService={tweetService} />
        <Tweets tweetService={tweetService} />
      </div>
      <div className={styles.right}></div>
    </div>
  );
};

export default HomePage;
