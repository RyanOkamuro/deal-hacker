import React from 'react';

import DealItem from './deal-item';

import './deal-board.css';

export default class DealBoard extends React.Component {
    render() {
        const saleItems = [{
            dealName: "Amazon Fire Stick",
            price: "$15",
            details: "Details",
            image: "https://images-na.ssl-images-amazon.com/images/I/51D8NXwQfvL._SY355_.jpg",
            imageClass: "fireStick",
            seller: "Walmart",
            favorite: "https://i.stack.imgur.com/LQk8v.png",
            favoriteClass: "favorite"
        }, {
            dealName: "Dyson DC58/V6 Trigger Cordless Vacuum",
            price: "$149.99",
            details: "Details",
            image: "https://cdn.shopify.com/s/files/1/2459/7473/products/2_2c700c99-6931-4369-85ae-f7a92ad308d5_1024x1024@2x.JPG?v=1528114460",
            imageClass: "dyson",
            seller: "PCMag",
            favorite: "https://i.stack.imgur.com/LQk8v.png",
            favoriteClass: "favorite"
        }, {
            dealName: "Apple Watch Series 3 Smartwatch: 42mm",
            price: "$309",
            details: "Details",
            image: "https://slimages.macysassets.com/is/image/MCY/products/4/optimized/9005824_fpx.tif?op_sharpen=1&wid=500&hei=613&fit=fit,1&$filtersm$",
            imageClass: "iWatch",
            seller: "Macys",
            favorite: "https://i.stack.imgur.com/LQk8v.png",
            favoriteClass: "favorite"
        }, {
            dealName: "Dell XPS 13",
            price: "$309",
            details: "Details",
            image: "https://johnlewis.scene7.com/is/image/JohnLewis/237128354?$rsp-pdp-main-1440$",
            imageClass: "XPS",
            seller: "Dell",
            favorite: "https://i.stack.imgur.com/LQk8v.png",
            favoriteClass: "favorite"
        }, {
            dealName: "Charter Club 700 Thread Count Sheet Set",
            price: "$49.99",
            details: "Details",
            image: "https://slimages.macysassets.com/is/image/MCY/products/7/optimized/9492087_fpx.tif?op_sharpen=1&wid=500&hei=613&fit=fit,1&$filtersm$",
            imageClass: "bedSheets",
            seller: "Macys",
            favorite: "https://i.stack.imgur.com/LQk8v.png",
            favoriteClass: "favorite"
        }]
        // const singleDeal = [
        //     Amazon Fire Stick,
        //     "Dyson DC58/V6 Trigger Cordless Vacuum"
        // ].map((singleDeal, i) => <singleDeals key={i} singleDeal={this.props.singleDeal}/>);

        // const price = [
        //     "$15",
        //     "$149.99"
        // ].map((price, i) => <prices key={i} price={price}/>);

        // const details = "Details";
        // const image = "https://images-na.ssl-images-amazon.com/images/I/51D8NXwQfvL._SY355_.jpg";
        // const imageClass = "fireStick";
        // const seller = "Walmart";
        // const favorite = "https://i.stack.imgur.com/LQk8v.png";
        // const favoriteClass = "favorite";

        // // const singleDeal2 = "Dyson DC58/V6 Trigger Cordless Vacuum";
        // // const price2 = "$149.99";
        // // const details2 = "Details";
        // // const image2 = "https://cdn.shopify.com/s/files/1/2459/7473/products/2_2c700c99-6931-4369-85ae-f7a92ad308d5_1024x1024@2x.JPG?v=1528114460";
        // // const imageClass2 = "dyson";
        // // const seller2 = "PCMag";
        // // const favorite2 = "https://i.stack.imgur.com/LQk8v.png";
        // // const favoriteClass2 = "favorite2";
        return (
            <div>
                <DealItem saleItems={saleItems} />
            </div>
        );
    }
}