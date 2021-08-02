import React, { useContext, useEffect, useState } from 'react';
import TweetCard from '../tweet_card/tweet_card';
import { useAuth } from '../../context/auth_context';

const Tweets = ({ tweetService }) => {
  const [tweets, setTweets] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    tweetService
      .getTweets()
      .then((tweets) => setTweets([...tweets]))
      .catch(console.error);
    // const stopSync = tweetService.onSync((tweet) => onCreated(tweet));
    // return () => stopSync();
  }, [tweetService]);

  // const onCreated = (tweet) => {
  //   setTweets((tweets) => [tweet, ...tweets]);
  // };

  return (
    <>
      {tweets.map((tweet) => {
        return <TweetCard key={tweet.id} tweet={tweet} />;
      })}
    </>
  );
};

export default Tweets;
