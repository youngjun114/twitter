import React from 'react';
import HomePage from './pages/home_page/home_page';

function App({ tweetService }) {
  return (
    <>
      <HomePage tweetService={tweetService} />
    </>
  );
}

export default App;
