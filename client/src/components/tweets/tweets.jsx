import React, { useEffect, useState } from 'react';
import TweetAddForm from '../tweet_add_form/tweet_add_form';
import TweetCard from '../tweet_card/tweet_card';
import styles from './tweets.module.css';

const Tweets = ({ tweetService }) => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    tweetService
      .getTweets()
      .then((tweets) => setTweets([...tweets]))
      .catch((error) => console.error);
  }, [tweetService]);

  return (
    <>
      <TweetAddForm />
      {tweets.map((tweet) => {
        return <TweetCard key={tweet.id} tweet={tweet} />;
      })}
    </>
  );
};

export default Tweets;
