import React from 'react';

import './stores-image.css';

export default class FavoriteProductDescription extends React.Component {
    render() {
        const favoriteProductDescription = (
            <div className="store-box">
                <p>{this.props.favoriteItemDetail.price}</p>
                <a href={this.props.favoriteItemDetail.dealLink}>{this.props.favoriteItemDetail.dealName}</a>
                <p>{this.props.favoriteItemDetail.productDescription}</p>
            </div>
        );   
        return (
            <div className="col-8">
                {favoriteProductDescription}
            </div> 
        )
    }
}



