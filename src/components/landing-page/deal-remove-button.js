import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../../actions/auth';
import {clearAuthToken} from '../../local-storage';
import {withRouter} from 'react-router-dom';
import {removeOneDeal} from '../../actions/dealActions';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'

let loggedInUserId;

class DealRemoveButton extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    constructor(props){
        super(props);
        this.removeOneDeal=this.removeOneDeal.bind(this)
    }

    submit = () => {
        confirmAlert({
            customUI: ({ onClose }) => {
              return (
                <div className='custom-ui'>
                  <p className='confirmation-mssg'>Do you want to remove this deal?</p>
                  <div className='button-container'>
                    <button role='button' className='confirmation-yes' onClick={() => {
                        this.removeOneDeal(this.props.dealItem.id)
                        onClose()
                    }}>Yes</button>
                    <button role='button' className='confirmation-no' onClick={onClose}>No</button>
                  </div>
                </div>
              )
            }
          })
      };
   
    removeOneDeal(dealId) {
        this.props.dispatch(removeOneDeal(dealId));
    }
    render() {
        let userDeal = this.props.dealItem;
        let userId = userDeal['user'];
        let dealRemoveButtonImage = null;
        if (this.props.loggedIn && userId === loggedInUserId) {
            dealRemoveButtonImage = (
                <img src='http://www.glenviewhealthclub.com/wp-content/uploads/x-mark.png' onClick={() => this.submit()} className='removeDealButton' alt='removeButton'></img>
            )
        }    
        return (
           dealRemoveButtonImage
        )
    }
}

DealRemoveButton.defaultProps = {
    deal: 'DealRemoveButton'
};

const mapStateToProps = state => {
    let user = state.auth.currentUser;
    if(user !== null) {
        loggedInUserId = user['id']
    }
return {
    deal: state.deal,
    loggedIn: state.auth.currentUser !== null
}
};

export default withRouter(connect(mapStateToProps)(DealRemoveButton));