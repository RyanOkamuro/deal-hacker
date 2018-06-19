import React from 'react';

import DealItem from './deal-item';

import './deal-board.css';

export default class DealBoard extends React.Component {
    render() {
        const saleItems = [{
            id: "1",
            dealName: "Amazon Fire Stick",
            price: "$15",
            details: "Details",
            image: "https://images-na.ssl-images-amazon.com/images/I/51D8NXwQfvL._SY355_.jpg",
            imageClass: "fireStick",
            seller: "Walmart",
            favorite: "https://i.stack.imgur.com/LQk8v.png",
            favoriteClass: "favorite", 
            productDescription: "The next generation of our best-selling Fire TV Stick–now with the Alexa Voice Remote. \n Walmart has the deal on sale for $15 \n Free shipping with purchases $35+",
            dealLink: "https://www.walmart.com/ip/All-New-F-re-TV-with-4K-Ultra-HD-and-Alexa-Voice-Remote-2017-Edition-Pendant-Streaming-Media-Player/336757733"
        }, {
            id: "2",
            dealName: "Dyson DC58/V6 Trigger Cordless Vacuum",
            price: "$149.99",
            details: "Details",
            image: "https://cdn.shopify.com/s/files/1/2459/7473/products/2_2c700c99-6931-4369-85ae-f7a92ad308d5_1024x1024@2x.JPG?v=1528114460",
            imageClass: "dyson",
            seller: "PCMag",
            favorite: "https://i.stack.imgur.com/LQk8v.png",
            favoriteClass: "favorite",
            productDescription: "Weighing only 3.4lbs this portable vacuum goes anywhere and does any job with its 2 tier radial cyclone suction. Hygienic bin emptying makes it a quick and clean way to dispose of debris. \n PCMag has the deal on sale for $149.99 \n Free shipping",
            dealLink: "https://shop.pcmag.com/products/dyson-dc58-v6-trigger-cordless-vacuum"
        }, {
            id: "3",
            dealName: "Apple Watch Series 3 Smartwatch: 42mm",
            price: "$309",
            details: "Details",
            image: "https://slimages.macysassets.com/is/image/MCY/products/4/optimized/9005824_fpx.tif?op_sharpen=1&wid=500&hei=613&fit=fit,1&$filtersm$",
            imageClass: "iWatch",
            seller: "Macys",
            favorite: "https://i.stack.imgur.com/LQk8v.png",
            favoriteClass: "favorite", 
            productDescription: "Measure your workouts, from running and cycling to new high-intensity interval training. Track and share your daily activity, and get the motivation you need to hit your goals. Better manage everyday stress and monitor your heart rate more effectively. Automatically sync your favorite playlists. And stay connected to the people and info you care about most.",
            dealLink: "https://www.macys.com/shop/product/apple-watch-series-3-gps-42mm-space-gray-aluminum-case-with-black-sport-band?ID=5302666&CategoryID=154442#fn=sp%3D1%26spc%3D29%26ruleId%3D78%7CBOOST%20SAVED%20SET%7CBOOST%20ATTRIBUTE%26searchPass%3DmatchNone%26slotId%3D1"
        }, {
            id: "4",
            dealName: "Dell XPS 13 128GB SSD 8GB RAM",
            price: "$999",
            details: "Details",
            image: "https://johnlewis.scene7.com/is/image/JohnLewis/237128354?$rsp-pdp-main-1440$",
            imageClass: "XPS",
            seller: "Dell",
            favorite: "https://i.stack.imgur.com/LQk8v.png",
            favoriteClass: "favorite", 
            productDescription: "The smallest 13.3-inch laptop on the planet has the world’s first virtually borderless InfinityEdge display and the latest Intel® processors. Touch, Silver, and Rose Gold options available.",
            dealLink: "https://www.dell.com/en-us/shop/dell-laptops/xps-13/spd/xps-13-9360-laptop/fndot5135hv2cl"
        }, {
            id: "5",
            dealName: "Charter Club 700 Thread Count Sheet Set",
            price: "$49.99",
            details: "Details",
            image: "https://slimages.macysassets.com/is/image/MCY/products/7/optimized/9492087_fpx.tif?op_sharpen=1&wid=500&hei=613&fit=fit,1&$filtersm$",
            imageClass: "bedSheets",
            seller: "Macys",
            favorite: "https://i.stack.imgur.com/LQk8v.png",
            favoriteClass: "favorite",
            productDescription: "Create a relaxed sleeping environment in your room with the T700 sheet set from Charter Club, featuring an exceptionally soft fabric with a wrinkle resistant finish.",
            dealLink: "https://www.macys.com/shop/product/closeout-charter-club-700-thread-count-sheet-set-created-for-macys?ID=5964237&CategoryID=9915"
        }, {
            id: "6",
            dealName: "Bulova Men's Two-Tone Stainless Steel Bracelet Watch 43mm",
            price: "$201.45",
            details: "Details",
            image: "https://media.kohlsimg.com/is/image/kohls/1852576?wid=500&hei=500&op_sharpen=1",
            imageClass: "Bulova",
            seller: "Macys",
            favorite: "https://i.stack.imgur.com/LQk8v.png",
            favoriteClass: "favorite",
            productDescription: "Black multifunction dial with gold-tone stick indices, three hands, three subdials and logo Quartz movement /n Water resistant to 30 meters /n Three-year limited warranty",
            dealLink: "https://www.macys.com/shop/product/bulova-mens-two-tone-stainless-steel-bracelet-watch-43mm-98c120?ID=1619494&CategoryID=26215#fn=GENDER%3DMen%26SIZE%3D%26sp%3D1%26spc%3D233%26ruleId%3D64%7CBOOST%20SAVED%20SET%7CBOOST%20ATTRIBUTE%26searchPass%3DmatchNone%26slotId%3D1"
        }]
        return (
            <div>
                <DealItem saleItems={saleItems} />
            </div>
        );
    }
}