import React from 'react';

import Header from './header';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import DealBoard from './deal-board';
import DetailInformation from './detail-information';
import Login from './pages/login';
import Signup from './pages/signup';
import Error from './error';

export default function Sales() {
  return (
    <Router>
      <div className="homePage">
        <Header />
          <main>
            <Switch>
              <Route exact path="/" component={DealBoard} /> 
              <Route path="/detail-information" component={DetailInformation} />
              <Route path="/pages/login" component={Login} />
              <Route path="/pages/signup" component={Signup} />
              <Route component={Error} />
            </Switch>
          </main>
      </div>
    </Router>
  );
}