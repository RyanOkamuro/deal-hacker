import React from 'react';

import Comments from './comments';
import ProductImage from './product-image';
import ProductDescription from './product-description';
import CommentsListing from './comments-listing';
import {getAllDeals} from '../../actions/dealActions';
import {connect} from 'react-redux';

import './detail-information.css'; 

export class DetailInformation extends React.Component {
    componentDidMount() {
        this.props.dispatch(getAllDeals());
    }
    render() {
        if (this.props.location.allSalesItems) {
        return (
            <div className="row-wrapper">
                <div className="row2">
                    <ProductImage allSalesItems= {this.props.location.allSalesItems} />
                    <ProductDescription allSalesItems= {this.props.location.allSalesItems} />
                </div>
                
                <div className="row3">
                    <Comments allSalesItems= {this.props.location.allSalesItems} />
                    <CommentsListing allSalesItems= {this.props.location.allSalesItems} />
                </div>
                
            </div>
        );
        }else {
            const selectedProduct = this.props.allSalesItems.find(item=> item.id === this.props.match.params.product)
            if(selectedProduct) {
        return (
            <div className="row-wrapper">
                <div className="row2">
                    <ProductImage allSalesItems= {selectedProduct} />
                    <ProductDescription allSalesItems= {selectedProduct} />
                </div>
                <div className="row3">
                    <Comments allSalesItems= {selectedProduct} />
                    <CommentsListing allSalesItems= {selectedProduct} />
                </div>
            </div>
        )
        }else {
            return(null);
        }
        }
    }
}

// DetailInformation.defaultProps = {
//     title: 'DetailInformation'
// };

const mapStateToProps = state => {
    return {
    allSalesItems: state.deal.allDeals
    }
};

export default connect(mapStateToProps)(DetailInformation);
