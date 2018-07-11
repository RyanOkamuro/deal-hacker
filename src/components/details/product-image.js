import React from 'react';

import './product-image.css';

export default class ProductImage extends React.Component {
    render() {
        const productPhoto = (
            <div className="box2">
                <p className="deal-item-name">{this.props.allSalesItems.dealName}</p>
                <img src={this.props.allSalesItems.image} className="detailed-image" alt="sale item"></img>
            </div>
        );   
        return (
            <div className="col-4">
                {productPhoto}
            </div> 
        )
    }
}



