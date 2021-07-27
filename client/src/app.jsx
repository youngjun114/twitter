import React from 'react';
import { Switch, Route } from 'react-router';
import Header from './components/header/header';
import Tweets from './components/tweets/tweets';
import Index from './pages/index';

function App({ tweetService }) {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Index />
        </Route>
        <Route path='/home'>
          <Header />
          <Tweets tweetService={tweetService} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
