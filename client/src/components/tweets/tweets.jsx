import React, { useEffect, useState } from 'react';
import TweetCard from '../tweet_card/tweet_card';
import styles from './tweets.module.css';

const Tweets = ({ tweetService }) => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    tweetService
      .getTweets()
      .then((tweets) => setTweets([...tweets]))
      .catch(console.error);
  }, [tweetService]);

  return (
    <>
      {tweets.map((tweet) => {
        return <TweetCard key={tweet.id} tweet={tweet} />;
      })}
    </>
  );
};

export default Tweets;
