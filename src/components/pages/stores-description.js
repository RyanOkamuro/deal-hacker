import React from 'react';

export default class StoresProductDescription extends React.Component {
    render() {
        const storeProductDetails = (
            <div className="store-box">
                <p className="deal-sale-price">${this.props.dealItem.price}
                <a href={this.props.dealItem.dealLink} className="deal-link">Deal Link</a>
                </p>
                <p className="deal-description">{this.props.dealItem.productDescription}</p>
            </div>
        );   
        return (
            <div className="col-8">
                {storeProductDetails}
            </div> 
        )
    }
}