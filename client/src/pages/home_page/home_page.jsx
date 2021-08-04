import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Header from '../../components/header/header';
import Sidebar from '../../components/sidebar/sidebar';
import Tweets from '../../components/tweets/tweets';
import TweetsByUsername from '../../components/tweets_by_username/tweets_by_username';
import { useAuth } from '../../context/auth_context';
import styles from './home_page.module.css';

const HomePage = ({ tweetService }) => {
  const history = useHistory();
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    if (window.confirm('Do you want to log out?')) {
      logOut();
      history.push('/home');
    }
  };

  return (
    <div className={styles.layout}>
      <div className={styles.left}>
        <Sidebar />
      </div>
      <div className={styles.center}>
        <div className={styles.header}>
          <Header username={user.username} handleLogOut={handleLogOut} />
        </div>
        <Switch>
          <Route exact path='/home'>
            <Tweets tweetService={tweetService} />
          </Route>
          <Route path='/home/:username'>
            <TweetsByUsername tweetService={tweetService} />
          </Route>
        </Switch>
      </div>
      <div className={styles.right}></div>
    </div>
  );
};

export default HomePage;
