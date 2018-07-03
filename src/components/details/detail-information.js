import React from 'react';

import Comments from './comments';
import ProductImage from './product-image';
import ProductDescription from './product-description';
import CommentsListing from './comments-listing';

import './detail-information.css';

export default class DetailInformation extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div className="row-wrapper">
                <div className="row2">
                    <ProductImage allSalesItems= {this.props.history.location.allSalesItems} />
                    <ProductDescription allSalesItems= {this.props.history.location.allSalesItems} />
                </div>
                <div className="row3">
                    <Comments allSalesItems= {this.props.history.location.allSalesItems} />
                    <CommentsListing />
                </div>
            </div>
        );
    }
}
