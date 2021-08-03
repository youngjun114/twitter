import React, { useState, useEffect } from 'react';
import TweetCard from '../tweet_card/tweet_card';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../context/auth_context';
import styles from './tweets_by_username.module.css';

const TweetsByUsername = ({ tweetService }) => {
  const [tweets, setTweets] = useState([]);
  const { username } = useParams();
  const { user } = useAuth();

  const onCreated = (tweet) => {
    setTweets((tweets) => [tweet, ...tweets]);
  };

  useEffect(() => {
    tweetService
      .getTweets(username)
      .then((tweets) => setTweets([...tweets]))
      .catch(console.error);
    const stopSync = tweetService.onSync((tweet) => onCreated(tweet));
    return () => stopSync();
  }, [tweetService, username, user]);

  return (
    <>
      {tweets.length === 0 && (
        <div className={styles.alert}>
          <h1 className={styles.alert_text}>No tweets have found</h1>
        </div>
      )}
      {tweets.map((tweet) => {
        return <TweetCard key={tweet.id} tweet={tweet} />;
      })}
    </>
  );
};

export default TweetsByUsername;
