import React from 'react';

import './view-details.css';

export default class ViewDetails extends React.Component {
    render() {
        return (
            <button type="button" className="js-search-details">{this.props.details}</button>
        )
    }
}