import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Nominate from './components/Nominate';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import './index.css';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path = "/" exact component = { Home } />
      <Route path = "/nominate" component = { Nominate } />
    </Switch>
  </Router>,
  document.getElementById('root')
);