import React from 'react';

import './deal-name.css';

export default class DealName extends React.Component {
    render() {
        return (
            <figure>
                <img src={this.props.image} alt=""></img>
                <figcaption>{this.props.singleDeal}</figcaption>
                <figcaption>{this.props.price}</figcaption>
            </figure>
        )
    }
}