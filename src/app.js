import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Home/Main.js'
import store from './redux/store.js';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store} >
    <Main />
  </Provider>
, document.getElementById('root'));