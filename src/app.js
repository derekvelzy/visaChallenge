import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Home/Main.js';
import Routes from './components/Routes.js';
import store from './redux/store.js';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store} >
    <Routes />
  </Provider>
, document.getElementById('root'));