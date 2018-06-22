import React from 'react';

import DealItem from './deal-item';

import './deal-board.css';

export default class DealBoard extends React.Component {
    constructor(props) {
        super(props)
    } 
    render() { 
        return (
            <div>
                <DealItem saleItems={this.props.saleItems} />
            </div>
        );
    }
}