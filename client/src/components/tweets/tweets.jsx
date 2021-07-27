import React, { useEffect, useState } from 'react';
import TweetCard from '../tweet_card/tweet_card';
import styles from './tweets.module.css';

const Tweets = ({ tweetService }) => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    tweetService
      .getTweets()
      .then((tweets) => setTweets([...tweets]))
      .catch((error) => console.error);
  }, [tweetService, tweets]);

  return (
    <section className={styles.container}>
      {tweets.map((tweet) => {
        return <TweetCard key={tweet.id} tweet={tweet} />;
      })}
    </section>
  );
};

export default Tweets;
