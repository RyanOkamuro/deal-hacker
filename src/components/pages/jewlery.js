import React from 'react';

import StoresProductImage from './stores-image';
import StoresProductDescription from './stores-description';
import {getAllDeals} from '../../actions/dealActions';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import JewleryHeader from './jewlery-title';

import './stores-layout.css';

export class Jewlery extends React.Component {
    componentDidMount() {
        this.props.dispatch(getAllDeals());
    }
    render() {
        console.log(this.props);
        let storeMatch= this.props.lists.filter(function(saleItem) {
            return saleItem.productCategory === "Jewlery";
        });

        let dealItems= storeMatch.map((dealItem, index) => (
            <div className="row-store" key={index}>
                <StoresProductImage dealItem={dealItem} />
                <StoresProductDescription dealItem={dealItem} />
            </div>        
        ));

        return (
            <div>
                <JewleryHeader />
                <div className="store-row-wrapper">
                    {dealItems}
                </div>
            </div>
        );
    }
}

Jewlery.defaultProps = {
    title: 'Jewlery'
};

const mapStateToProps = state => ({
    lists: state.deal.allDeals
});

export default withRouter(connect(mapStateToProps)(Jewlery));