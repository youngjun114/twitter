import React, { memo, useState, useEffect } from 'react';
import Banner from '../banner/banner';
import TweetCard from '../tweet_card/tweet_card';
import TweetAddForm from '../tweet_add_form/tweet_add_form';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../context/auth_context';

const Tweets = memo(({ tweetService, username }) => {
  const [tweets, setTweets] = useState([]);
  const [error, setError] = useState('');
  const history = useHistory();
  const { user } = useAuth();

  useEffect(() => {
    tweetService
      .getTweets(username)
      .then((tweets) => setTweets([...tweets]))
      .catch(onError);
    console.log(tweets);
    const stopSync = tweetService.onSync((tweet) => onCreated(tweet));
    return () => stopSync();
  }, [tweetService, username, user]);

  const onCreated = (tweet) => {
    setTweets((tweets) => [tweet, ...tweets]);
  };

  const onDelete = (tweetId) =>
    tweetService
      .deleteTweet(tweetId)
      .then(() =>
        setTweets((tweets) => tweets.filter((tweet) => tweet.id !== tweetId))
      )
      .catch((error) => setError(error.toString()));

  const onUpdate = (tweetId, text) =>
    tweetService
      .updateTweet(tweetId, text)
      .then((updated) =>
        setTweets((tweets) =>
          tweets.map((item) => (item.id === updated.id ? updated : item))
        )
      )
      .catch((error) => error.toString());

  const onError = (error) => {
    setError(error.toString());
    setTimeout(() => {
      setError('');
    }, 3000);
  };

  return (
    <>
      {error && <Banner text={error} isAlert={true} transient={true} />}
      <TweetAddForm tweetService={tweetService} onError={onError} />
      {tweets.map((tweet) => {
        console.log(tweet.username);
        return (
          <TweetCard
            key={tweet.id}
            tweet={tweet}
            isAuthor={tweet.username === user.username}
            handleDelete={onDelete}
            handleUpdate={onUpdate}
          />
        );
      })}
    </>
  );
});

export default memo(Tweets);
