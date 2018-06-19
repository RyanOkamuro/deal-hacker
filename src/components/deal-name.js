import React from 'react';

import './deal-name.css';

export default class DealName extends React.Component {
    render() {
        return (
            <div>
                <figure>
                    <img src={this.props.saleItem.favorite} className={this.props.saleItem.favoriteClass} alt="favorite"></img>
                    <img src={this.props.saleItem.image} id= {this.props.saleItem.id} className={this.props.saleItem.imageClass} alt="sale item"></img>
                    <figcaption>{this.props.saleItem.dealName}</figcaption>
                    <figcaption>{this.props.saleItem.seller}</figcaption>
                    <figcaption>{this.props.saleItem.price}</figcaption>
                </figure>
            </div>
        )
    }
}