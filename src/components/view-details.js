import React from 'react';
import {Link} from "react-router-dom";

import './view-details.css';

export default class ViewDetails extends React.Component {
    render() {
        return (
            <div>
                <Link to={"/details/detail-information/:product"}><button class="btn">{this.props.saleItem.details}</button></Link>
            </div>
        )
    }
}