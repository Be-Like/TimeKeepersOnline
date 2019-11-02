import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Register from '../landing/Register';
import Login from '../landing/Login';
import Alerts from '../general/Alerts';

const Routes = () => {
  return (
    <section className='container'>
      <Alerts />
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </section>
  );
};

export default Routes;
