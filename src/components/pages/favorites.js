import React from 'react';

// import StoresProductImage from './stores-image';
// import StoresProductDescription from './stores-description';

import './stores-layout.css';

export default class Favorites extends React.Component {
    render() {
        return (
            <div className="store-row-wrapper">
                <div className="row-store">
                    {/* <StoresProductImage saleItems={this.props.saleItems} />
                    <StoresProductDescription saleItems={this.props.saleItems} /> */}
                </div>
            </div>
        );
    }
}
