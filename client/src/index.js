import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import HttpClient from './network/http';
import TweetService from './service/tweet';
import { BrowserRouter as Router } from 'react-router-dom';

const baseURL = process.env.REACT_APP_BASE_URL;
const httpClient = new HttpClient(baseURL);
const tweetService = new TweetService(httpClient);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App tweetService={tweetService} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
