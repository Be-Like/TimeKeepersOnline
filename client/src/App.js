import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Redux
import { Provider } from 'react-redux';
import store from './store';

import Landing from './components/landing/Landing';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            <Route exact path='/' component={Landing} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
