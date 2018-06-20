import React from 'react';

export default class StoresProductDescription extends React.Component {
    render() {
        const storeProductDetails = (
            <div className="store-box">
                <p></p>
                <a></a>
                <p></p>
                {/* <p>{this.props.allSalesItems.price}</p>
                <a href={this.props.allSalesItems.dealLink}>{this.props.allSalesItems.dealName}</a>
                <p>{this.props.allSalesItems.productDescription}</p> */}
            </div>
        );   
        return (
            <div className="col-8">
                {storeProductDetails}
            </div> 
        )
    }
}