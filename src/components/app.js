import React from 'react';

import WebFont from 'webfontloader';
import Header from './landing-page/header';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {refreshAuthToken} from '../actions/auth';
import DealBoard from './landing-page/deal-board';
import DetailInformation from './details/detail-information';
import Favorites from './pages/favorites';
import Amazon from './pages/amazon';
import BestBuy from './pages/bestbuy';
import Dell from './pages/dell';
import Macys from './pages/macys';
import Walmart from './pages/walmart';
import Electronics from './pages/electronics';
import HomeNeeds from './pages/homeneeds';
import Jewlery from './pages/jewlery';
import AddNewDealForm from './pages/add-new-deal';
import EditDeal from './pages/edit-deal';
import LoginPage from './pages/login-page';
import RegistrationPage from './pages/registration-page';
import Error from './landing-page/error';

WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'sans-serif']
  }
});

export class App extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
        // When we are logged in, refresh the auth token periodically
        this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
        // Stop refreshing when we log out
        this.stopPeriodicRefresh();
    }
  } 

  componentWillUnmount() {
      this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
      this.refreshInterval = setInterval(
          () => this.props.dispatch(refreshAuthToken()),
          60 * 60 * 1000 // One hour
      );
  }

  stopPeriodicRefresh() {
      if (!this.refreshInterval) {
          return;
      }

      clearInterval(this.refreshInterval);
  }
  
  render() {
    return (
      <Router>
        <div className='homePage'>
          <Header />
            <main role='main'>
              <Switch>
                <Route exact path='/' component={DealBoard} /> 
                <Route path='/details/detail-information/:product' name='detail-information' component={DetailInformation} />
                <Route path='/amazon' name='amazon-deal' component={Amazon} />
                <Route path='/bestbuy' name='bestbuy-deal' component={BestBuy} />
                <Route path='/dell' name='dell-deal' component={Dell} />
                <Route path='/macys' name='macys-deal' component={Macys} />
                <Route path='/walmart' name='walmart-deal' component={Walmart}  />
                <Route path='/electronics' name='electronic-deal' component={Electronics} />
                <Route path='/homeneeds' name='homeneeds-deal' component={HomeNeeds} />
                <Route path='/jewlery' name='jewlery-deal' component={Jewlery} />
                <Route path='/favorites' component={Favorites} /> 
                <Route path='/add-deal' name='add-deal' component={AddNewDealForm} />
                <Route path='/edit-deal' name='edit-deal' component={EditDeal} />
                <Route path='/login' name='login' component={LoginPage} />
                <Route path='/registration' name='registration' component={RegistrationPage} />
                <Route component={Error} />
              </Switch>
            </main>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(App);