import React from 'react';

import StoresProductImage from './stores-image';
import StoresProductDescription from './stores-description';

import './stores-layout.css';

export default class Jewlery extends React.Component {
    render() {
        let storeMatch= this.props.saleItems.filter(function(saleItem) {
            return saleItem.productCategory === "Jewlery";
        });

        let dealItems= storeMatch.map((dealItem, index) => (
            <div className="row-store" key={index}>
                <StoresProductImage dealItem={dealItem} />
                <StoresProductDescription dealItem={dealItem} />
            </div>        
        ));

        return (
            <div className="store-row-wrapper">
                {dealItems}
            </div>
        );
    }
}
