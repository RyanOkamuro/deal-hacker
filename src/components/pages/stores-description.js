import React from 'react';

export default class StoresProductDescription extends React.Component {
    render() {
        const storeProductDetails = (
            <div className="store-box">
                <p>{this.props.dealItem.price}</p>
                <a href={this.props.dealItem.dealLink}>{this.props.dealItem.dealName}</a>
                <p>{this.props.dealItem.productDescription}</p>
            </div>
        );   
        return (
            <div className="col-8">
                {storeProductDetails}
            </div> 
        )
    }
}