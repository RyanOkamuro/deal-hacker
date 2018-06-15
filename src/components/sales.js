import React from 'react';

import Header from './header';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import DealBoard from './deal-board';
import DetailInformation from './detail-information';

export default function Sales() {
  return (
    <Router>
      <div className="homePage">
        <Header />
          <main>
            <Switch>
              <Route exact path="/" component={DealBoard} /> 
              <Route exact path="/detail-information/:detail-information" component={DetailInformation} />
            </Switch>
          </main>
      </div>
    </Router>
  );
}