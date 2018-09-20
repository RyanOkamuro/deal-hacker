import React from 'react';

import {connect} from 'react-redux';
import {clearAuth} from '../../actions/auth';
import {clearAuthToken} from '../../local-storage';
import {withRouter} from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'

import {addNewFavorite} from '../../actions/favoriteActions';

class FavoriteStar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    constructor(props){
        super(props);
        this.addNewFavorite=this.addNewFavorite.bind(this)
    }

    submit = () => {
        confirmAlert({
            customUI: ({ onClose }) => {
              return (
                <div className='custom-ui'>
                  <p className='confirmation-mssg'>Added to favorites</p>
                  <div className='button-container'>
                    <button role='button' className='confirmation-yes' onClick={() => {
                        this.addNewFavorite(this.props.favoriteItem.id)
                        onClose()
                    }}>Okay</button>
                  </div>
                </div>
              )
            }
          })
      };
   
    addNewFavorite(deal) {
        this.props.dispatch(addNewFavorite(deal));
    }
    render() {
        let favoriteStarImage = null;
        if (this.props.loggedIn) {
            favoriteStarImage = (
                <img src='https://i.stack.imgur.com/LQk8v.png' onClick={() => this.submit()} className='favorite' alt='favorite'></img>
            )
        } 
        return (
            favoriteStarImage

        )
    }
}

FavoriteStar.defaultProps = {
    deal: 'FavoriteStar'
};

const mapStateToProps = state => ({
    myFavorite: state.myFavorite,
    loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(FavoriteStar));