import React from 'react';
import Moment from 'react-moment'; 

export default class StoresProductDescription extends React.Component {
    render() {
        const storeProductDetails = (
            <div className="store-box-2">
                <p className="deal-sale-price">${this.props.dealItem.price}
                <a href={this.props.dealItem.dealLink} className="deal-link">Deal Link</a>
                </p>
                <p className="deal-description">{this.props.dealItem.productDescription}</p>
                <p className="deal-post-time"><Moment format="MM-DD-YYYY HH:mm">{this.props.dealItem.createdAt}</Moment></p>
            </div>
        );   
        return (
            <div className="col-8">
                {storeProductDetails}
            </div> 
        )
    }
}