import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {getAllFavorites} from '../../actions/getFavorite';
import {removeOneFavorite} from '../../actions/removeFavorite';
import FavoriteProductImage from './favorites-image';
import FavoriteProductDescription from './favorites-description';

import './stores-layout.css';

class Favorites extends React.Component {
    componentDidMount() {
        this.props.dispatch(getAllFavorites());
        this.props.dispatch(removeOneFavorite());
    }
    render() {
        const favoriteItemDetails = this.props.favorite.map((favoriteItemDetail, index) => (
            <div className="row-store" key={index}>
                <FavoriteProductImage favoriteItemDetail={favoriteItemDetail} />
                <FavoriteProductDescription favoriteItemDetail={favoriteItemDetail} />
            </div>
        ));
        return (
            <div className="store-row-wrapper">
                {favoriteItemDetails}
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        favorite: state.getFavorite.dealItems,
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
    };
};

export default requiresLogin()(connect(mapStateToProps)(Favorites));


