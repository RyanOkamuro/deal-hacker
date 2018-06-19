import React from 'react';

import Header from './header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import DealBoard from './deal-board';
import DetailInformation from './details/detail-information';
import AddNewDealForm from './pages/add-new-deal';
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
              <Route path="/details/detail-information/:product" name="detail-information" component={DetailInformation} />
              <Route path="/pages/add-deal" name="add-deal" component={AddNewDealForm} />
              <Route path="/pages/login" name="login" component={Login} />
              <Route path="/pages/signup" name="signup" component={Signup} />
              <Route component={Error} />
            </Switch>
          </main>
      </div>
    </Router>
  );
}