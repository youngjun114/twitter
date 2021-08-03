import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthProvider } from './context/auth_context';
import HomePage from './pages/home_page/home_page';
import IndexPage from './pages/index_page/index_page';

function App({ tweetService, authErrorEventBus, authService }) {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <IndexPage />
        </Route>
        <Route path='/home'>
          <AuthProvider
            authService={authService}
            authErrorEventBus={authErrorEventBus}
          >
            <HomePage tweetService={tweetService} />
          </AuthProvider>
        </Route>
      </Switch>
    </>
  );
}

export default App;
