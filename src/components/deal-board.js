import React from 'react';

import DealItem from './deal-item';

import './deal-board.css';

export default class DealBoard extends React.Component {
    render() {
        const singleDeal = "Amazon Fire Stick";
        const price = "$15";
        const details = "Details";
        const image = "https://images-na.ssl-images-amazon.com/images/I/51D8NXwQfvL._SY355_.jpg";
        const imageClass = "fireStick";
        const seller = "Walmart";
        const favorite = "https://i.stack.imgur.com/LQk8v.png";
        const favoriteClass = "favorite";
        return (
            <div>
                <DealItem details={details} singleDeal={singleDeal} price={price} image={image} imageClass={imageClass} seller={seller} favorite={favorite} favoriteClass={favoriteClass} />
            </div>
        );
    }
}