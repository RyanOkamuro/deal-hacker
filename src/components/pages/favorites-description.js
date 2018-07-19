import React from 'react';
import Moment from 'react-moment';

export default class FavoriteProductDescription extends React.Component {
    render() {
        const favoriteProductDescription = (
            <div className='store-box-2'>
                <p className='deal-sale-price'>${this.props.favoriteItemDetail.price}
                <a href={this.props.favoriteItemDetail.dealLink} className='deal-link'>Deal Link</a>
                </p>
                <p className='deal-description'>{this.props.favoriteItemDetail.productDescription}</p>
                <p className='deal-post-time'><Moment format='MM-DD-YYYY HH:mm'>{this.props.favoriteItemDetail.createdAt}</Moment></p>
            </div>
        );   
        return (
            <div className='col-8'>
                {favoriteProductDescription}
            </div> 
        )
    }
}



