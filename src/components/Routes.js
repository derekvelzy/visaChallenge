import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Main from './Home/Main.js';
import FormPage from './FormPage/FormPage.js';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/create" component={FormPage} />
      <Route path='/edit' component={FormPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;