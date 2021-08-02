import React from 'react';
import { Switch, Route } from 'react-router';
import HomePage from './pages/home_page/home_page';
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
        <Route path='/home'>
          <HomePage tweetService={tweetService} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
