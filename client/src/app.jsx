import React from 'react';
import { Switch, Route } from 'react-router';
import Header from './components/header/header';
import Tweets from './components/tweets/tweets';
import IndexPage from './pages/index_page/index_page';
import LoginPage from './pages/login_page/login_page';
import SignupPage from './pages/signup_page/signup_page';

function App({ tweetService }) {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <IndexPage />
        </Route>
        <Route path='/login'>
          <LoginPage />
        </Route>
        <Route path='/signup'>
          <SignupPage />
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
