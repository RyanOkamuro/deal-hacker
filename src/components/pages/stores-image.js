import React from 'react';

import './stores-image.css';

export default class StoresProductImage extends React.Component {
    render() {
        const storesProductPhotos = (
            <div className="store-box">
                <img src="" className="store-product-image" alt="sale item"></img> 
                {/* {this.props.allSalesItems.dealName}
                <img src={this.props.allSalesItems.image} className="detailed-image" alt="sale item"></img> */}
            </div>
        );   
        return (
            <div className="col-4">
                {storesProductPhotos}
            </div> 
        )
    }
}



