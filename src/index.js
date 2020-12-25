import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import './index.css';

ReactDOM.render(
  <Router>
    <Route path = "/" component = { Home } />
    <Route path = "/search" component = { Search } />
  </Router>,
  document.getElementById('root')
);