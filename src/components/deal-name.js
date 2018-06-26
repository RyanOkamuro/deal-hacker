import React from 'react';
import FavoriteStar from './favorite-star';

import './deal-name.css';

export default class DealName extends React.Component {
    render() {
        return (
            <div>
                <figure>
                    <FavoriteStar favoriteItem= {this.props.saleItem} />
                    <img src={this.props.saleItem.image} id= {this.props.saleItem.id} className={this.props.saleItem.imageClass} alt="sale item"></img>
                    <figcaption>{this.props.saleItem.dealName}</figcaption>
                    <figcaption>{this.props.saleItem.seller}</figcaption>
                    <figcaption>{this.props.saleItem.price}</figcaption>
                </figure>
            </div>
        )
    }
}