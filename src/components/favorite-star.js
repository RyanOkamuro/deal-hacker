import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

import {addNewFavorite} from '../actions/favoriteActions';

class FavoriteStar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    constructor(props){
        super(props);
        this.addNewFavorite=this.addNewFavorite.bind(this)
    }
   
    addNewFavorite(deal) {
        this.props.dispatch(addNewFavorite(deal));
    }
    render() {
        let favoriteStarImage;
        if (this.props.loggedIn) {
            favoriteStarImage = (
                <img src={this.props.favoriteItem.favorite} onClick={() => this.addNewFavorite(this.props.favoriteItem.id)} className={this.props.favoriteItem.favoriteClass} alt="favorite"></img>
            )
        } 
        return (
            <div>
                {favoriteStarImage}
            </div>
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

export default connect(mapStateToProps)(FavoriteStar);