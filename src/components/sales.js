import React from 'react';

import Header from './header';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import DealBoard from './deal-board';
import DetailInformation from './detail-information';
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
              <Route component={Error} />
            </Switch>
          </main>
      </div>
    </Router>
  );
}