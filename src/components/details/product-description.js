import React from 'react';
import {Link} from 'react-router-dom';
import EditDeal from '../pages/edit-deal'

export default class ProductDescription extends React.Component {
    render() {
        const editItem = {
            pathname: "/edit-deal/" + this.props.allSalesItems.id,
            id: this.props.allSalesItems.id
        };

        const productDetails = (
            <div className="box2">
                <p>${this.props.allSalesItems.price}</p>
                <a href={this.props.allSalesItems.dealLink}>{this.props.allSalesItems.dealName}</a>
                <p>{this.props.allSalesItems.productDescription}</p>
                <Link to={editItem}><button className="btn">Edit</button></Link>
            </div>
        );   
        return (
            <div className="col-8">
                {productDetails}
            </div> 
        )
    }
}