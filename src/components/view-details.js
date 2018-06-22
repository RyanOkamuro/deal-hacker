import React from 'react';
import {Link} from 'react-router-dom';

import './view-details.css';

export default class ViewDetails extends React.Component {
    render() {
        const salesItem = {
            pathname: "/details/detail-information/"+ this.props.saleItem.id,
            allSalesItems: this.props.saleItem
        };
        return (
            <div>
                <Link to={salesItem}><button className="btn">{this.props.saleItem.details}</button></Link>
            </div>
        )
    }
}