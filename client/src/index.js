import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './app';
import HttpClient from './network/http';
import TweetService from './service/tweet';
import AuthService from './service/auth';
import TokenStorage from './db/token';
import Socket from './network/socket';
import { AuthErrorEventBus } from './context/auth_context';

const baseURL = process.env.REACT_APP_BASE_URL;
const tokenStorage = new TokenStorage();
const httpClient = new HttpClient(baseURL);
const authErrorEventBus = new AuthErrorEventBus();
const socketClient = new Socket(baseURL, () => tokenStorage.getToken());
const authService = new AuthService(httpClient, tokenStorage);
const tweetService = new TweetService(httpClient, tokenStorage, socketClient);

console.log(`BaseURL from client is ${baseURL}`);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App
        tweetService={tweetService}
        authErrorEventBus={authErrorEventBus}
        authService={authService}
      />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
