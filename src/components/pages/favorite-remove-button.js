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
            customUI: ({ onClose }) => {
              return (
                <div className='custom-ui'>
                  <p className='confirmation-mssg'>Do you want to remove this favorite?</p>
                  <div className='button-container'>
                    <button className='confirmation-yes' onClick={() => {
                        this.removeOneFavorite(this.props.favoriteItemDetail)
                        onClose()
                    }}>Yes</button>
                    <button className='confirmation-no' onClick={onClose}>No</button>
                  </div>
                </div>
              )
            }
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