import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './components/Routes.js';
import store from './redux/store.js';
import { Provider } from 'react-redux';

const musicians = [
  {
    id: 0,
    first: 'John',
    last: 'Coltrane',
    phone: '(123) 456-7890',
    email: 'jcoltrane@gmail.com'
  },
  {
    id: 1,
    first: 'Miles',
    last: 'Davis',
    phone: '(098) 765-4321',
    email: 'mdavis@gmail.com'
  },
  {
    id: 2,
    first: 'Chick',
    last: 'Corea',
    phone: '(111) 222-3333',
    email: 'ccorea@gmail.com'
  },
  {
    id: 3,
    first: 'Herbie',
    last: 'Hancock',
    phone: '(925) 203-3991',
    email: 'hhancock@gmail.com'
  },
  {
    id: 4,
    first: 'Bill',
    last: 'Evans',
    phone: '(900) 900-9000',
    email: 'bevans@gmail.com'
  },
  {
    id: 5,
    first: 'Charles',
    last: 'Mingus',
    phone: '(123) 123-1234',
    email: 'cmingus@gmail.com'
  },
  {
    id: 6,
    first: 'Pat',
    last: 'Metheny',
    phone: '(382) 928-3478',
    email: 'pmetheny@gmail.com'
  },
  {
    id: 7,
    first: 'Charlie',
    last: 'Parker',
    phone: '(999) 999-9999',
    email: 'thebird@gmail.com'
  },
];

localStorage.setItem('contacts', JSON.stringify(musicians));

ReactDOM.render(
  <Provider store={store} >
    <Routes />
  </Provider>
, document.getElementById('root'));