import React from 'react';
import Header from './components/header/header';
import Tweets from './components/tweets/tweets';
function App({ tweetService }) {
  return (
    <>
      <Header />
      <Tweets tweetService={tweetService} />
    </>
  );
}

export default App;
