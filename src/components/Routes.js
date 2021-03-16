import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Main from './Home/Main.js';
import CreatePage from './Create/CreatePage.js';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/create" component={CreatePage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;