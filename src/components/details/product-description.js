import React from 'react';

export default class ProductDescription extends React.Component {
    render() {
        const productDetails = (
            <div className="box2">
                <p>${this.props.allSalesItems.price}</p>
                <a href={this.props.allSalesItems.dealLink}>{this.props.allSalesItems.dealName}</a>
                <p>{this.props.allSalesItems.productDescription}</p>
            </div>
        );   
        return (
            <div className="col-8">
                {productDetails}
            </div> 
        )
    }
}