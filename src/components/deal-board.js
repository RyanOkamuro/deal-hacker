import React from 'react';

import DealItem from './deal-item';
import ViewDetails from './deal-item';

import './deal-board.css';

export default class DealBoard extends React.Component {
    render() {
        const singleDeal = "Product Description";
        const price = "Price";
        const details = "Details";
        const image = "https://images-na.ssl-images-amazon.com/images/I/51D8NXwQfvL._SY355_.jpg";
        return (
            <div>
                <DealItem details={details} singleDeal={singleDeal} price={price} image={image} />
            </div>
        );
    }
}