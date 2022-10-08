import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import 'index.css';
import Router from './routes';
import Menu from 'components/Menu';
import Header from 'components/Header';


ReactDOM.render(
  <React.StrictMode>
    <Menu />
    <Header />
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);