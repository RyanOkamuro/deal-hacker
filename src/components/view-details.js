import React from 'react';
import {Link} from "react-router-dom";

import './view-details.css';

export default class ViewDetails extends React.Component {
    render() {
        return (
            <div>
                <Link to={"/detail-information"}><button class="btn">{this.props.details}</button></Link>
            </div>
        )
    }
}