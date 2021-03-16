import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Main from './Home/Main.js';
import CreatePage from './Create/CreatePage.js';
import EditPage from './Edit/EditPage.js';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/create" component={CreatePage} />
      <Route path='/edit' component={EditPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;