import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import HttpClient from './network/http';
import TweetService from './service/tweet';
import TokenStorage from './db/token';
import Socket from './network/socket';
import { BrowserRouter as Router } from 'react-router-dom';

const baseURL = process.env.REACT_APP_BASE_URL;
const tokenStorage = new TokenStorage();
const httpClient = new HttpClient(baseURL);
const socketClient = new Socket(baseURL, () => tokenStorage.getToken());
const tweetService = new TweetService(httpClient, tokenStorage, socketClient);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App tweetService={tweetService} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
