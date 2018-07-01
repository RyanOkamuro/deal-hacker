import React from 'react';

import './stores-image.css';

export default class FavoriteProductImage extends React.Component {
    render() {
        const favoriteProductPhotos = (
            <div className="store-box">
                {this.props.favoriteItemDetail.dealName}
                <img src={this.props.favoriteItemDetail.image} className="store-image-list" alt="sale item"></img>
            </div>
        );   
        return (
            <div className="col-4">
                {favoriteProductPhotos}
            </div> 
        )
    }
}



