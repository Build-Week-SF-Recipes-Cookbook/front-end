import React from 'react';
import ReactDOM from 'react-dom';
import {   BrowserRouter as Router } from 'react-router-dom'
//Importing Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//Styles CSS
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
