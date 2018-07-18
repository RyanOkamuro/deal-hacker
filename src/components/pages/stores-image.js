import React from 'react';

export default class StoresProductImage extends React.Component {
    render() {
        const storesProductPhotos = (
            <div className="store-box-2">
                <p className="deal-item-name">{this.props.dealItem.dealName}</p>
                <img src={this.props.dealItem.image} className="store-image-list" alt="sale item"></img>
            </div>
        );   
        return (
            <div className="col-4">
                {storesProductPhotos}
            </div> 
        )
    }
}



