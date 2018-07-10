import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {getAllFavorites} from '../../actions/favoriteActions';
import FavoriteProductImage from './favorites-image';
import FavoriteProductDescription from './favorites-description';
import {withRouter} from 'react-router-dom';

import './stores-layout.css';

class Favorites extends React.Component {
    componentDidMount() {
        this.props.dispatch(getAllFavorites());
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
        favorite: state.favorite.dealItems,
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
    };
};

export default withRouter(requiresLogin()(connect(mapStateToProps)(Favorites)));


