import React from 'react';

import StoresProductImage from './stores-image';
import StoresProductDescription from './stores-description';

import './stores-layout.css';

export default class StoresDetailInformation extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div className="store-row-wrapper">
                <div className="row-store">
                    {/* <StoresProductImage allSalesItems= {this.props.history.location.allSalesItems} />
                    <StoresProductDescription allSalesItems= {this.props.history.location.allSalesItems} /> */}
                    <StoresProductImage allSalesItems= {this.props.history.location.allSalesItems} />
                    <StoresProductDescription allSalesItems= {this.props.history.location.allSalesItems} />
                </div>
            </div>
        );
    }
}
