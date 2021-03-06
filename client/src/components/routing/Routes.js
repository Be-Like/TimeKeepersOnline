import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import Register from '../landing/Register';
import Login from '../landing/Login';
import Alerts from '../general/Alerts';
import Dashboard from '../dashboard/Dashboard';
import Management from '../management/Management';
import Calendar from '../calendar/CalendarPage';

const Routes = () => {
  return (
    <section>
      <Alerts />
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/management' component={Management} />
        <PrivateRoute exact path='/calendar' component={Calendar} />
      </Switch>
    </section>
  );
};

export default Routes;
