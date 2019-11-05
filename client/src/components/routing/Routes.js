import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import Register from '../landing/Register';
import Login from '../landing/Login';
import Alerts from '../general/Alerts';
import Dashboard from '../dashboard/Dashboard';

const Routes = () => {
  return (
    <section className='container'>
      <Alerts />
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
      </Switch>
    </section>
  );
};

export default Routes;
