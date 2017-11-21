import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import AutorBox from './Autor'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="/autor" component={AutorBox} />
    </Route>
  </Router>),
  document.getElementById('root')
);
// registerServiceWorker();
