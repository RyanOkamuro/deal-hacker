import React from 'react';
import {connect} from 'react-redux';
// import FavoriteStar from '../favorite-star';
import FavoriteProductImage from './favorites-image';
import FavoriteProductDescription from './favorites-description';

import './stores-layout.css';

class Favorites extends React.Component {
    render() {
        console.log(this.props.favorite.dealItems);
        const favoriteItemDetails = this.props.favorite.dealItems.map((favoriteItemDetail, index) => (
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
    console.log(state);
    return {favorite: state.favorite}
};

export default connect(mapStateToProps)(Favorites);

