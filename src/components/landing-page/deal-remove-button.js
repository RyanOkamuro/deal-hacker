import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../../actions/auth';
import {clearAuthToken} from '../../local-storage';
import {withRouter} from 'react-router-dom';
import {removeOneDeal} from '../../actions/dealActions';

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
   
    removeOneDeal(dealId) {
        this.props.dispatch(removeOneDeal(dealId));
    }
    render() {
        let userDeal = this.props.dealItem;
        let userId = userDeal['user'];
        let dealRemoveButtonImage;
        if (this.props.loggedIn && userId === loggedInUserId) {
            dealRemoveButtonImage = (
                <img src='http://www.glenviewhealthclub.com/wp-content/uploads/x-mark.png' onClick={() => this.removeOneDeal(this.props.dealItem.id)} className='removeDealButton' alt='removeButton'></img>
            )
        }    
        return (
            <div>
                {dealRemoveButtonImage}
            </div>
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