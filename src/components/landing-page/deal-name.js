import React from 'react';
import FavoriteStar from './favorite-star';

import './deal-name.css';

export default class DealName extends React.Component {
    render() {
        return (
            <div>
                <figure>
                    <FavoriteStar favoriteItem= {this.props.saleItem} />
                    <img src={this.props.saleItem.image} id= {this.props.saleItem.id} className="deal-item-image" alt="sale item"></img>
                    <figcaption className="store-name">{this.props.saleItem.seller}</figcaption>
                    <figcaption className="deal-name">{this.props.saleItem.dealName}</figcaption>
                    <figcaption className="deal-price">${this.props.saleItem.price}</figcaption>
                </figure>
            </div>
        )
    }
}