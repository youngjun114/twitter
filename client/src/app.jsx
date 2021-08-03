import React from 'react';
import { Switch, Route } from 'react-router';
import HomePage from './pages/home_page/home_page';

function App({ tweetService }) {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <HomePage
            tweetService={tweetService}
          />
        </Route>
      </Switch>
    </>
  );
}

export default App;
