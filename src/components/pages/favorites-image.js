import React from 'react';
import FavoriteRemoveButton from './favorite-remove-button';

import './favorites-image.css'

export default class FavoriteProductImage extends React.Component {
    render() {
        const favoriteProductPhotos = (
            <div className='store-box-2'>
                <FavoriteRemoveButton favoriteItemDetail={this.props.favoriteItemDetail} />
                <p className='deal-item-name'>{this.props.favoriteItemDetail.dealName}</p>
                <img src={this.props.favoriteItemDetail.image} className='store-image-list' alt='sale item'></img>
            </div>
        );   
        return (
            <div className='col-4'>
                {favoriteProductPhotos}
            </div> 
        )
    }
}



