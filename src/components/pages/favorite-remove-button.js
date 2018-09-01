import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {removeOneFavorite} from '../../actions/favoriteActions';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'

class FavoriteRemoveButton extends React.Component {
    constructor(props){
        super(props);
        this.removeOneFavorite=this.removeOneFavorite.bind(this)
    }

    submit = () => {
        confirmAlert({
          title: 'Confirm to submit',
          message: 'Are you sure to remove this favorite?',
          buttons: [
            {
              label: 'Yes',
              onClick: () => this.removeOneFavorite(this.props.favoriteItemDetail)
            },
            {
              label: 'No'
            }
          ]
        })
      };
   
    removeOneFavorite(dealId) {
        this.props.dispatch(removeOneFavorite(dealId._id));
    }
    render() {
        return (
            <div>
                <img src='http://www.glenviewhealthclub.com/wp-content/uploads/x-mark.png' onClick={() => this.submit()} className='removeFavoriteButton' alt='removeButton'></img>
            </div>
        );
    }
}

FavoriteRemoveButton.defaultProps = {
    deal: 'FavoriteRemoveButton'
};

const mapStateToProps = state => ({
    myFavorite: state.myFavorite
});

export default withRouter(connect(mapStateToProps)(FavoriteRemoveButton));