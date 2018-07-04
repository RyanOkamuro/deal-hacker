import React from 'react';

import StoresProductImage from './stores-image';
import StoresProductDescription from './stores-description';
import {getAllDeals} from '../../actions/dealActions';
import {connect} from 'react-redux';

import './stores-layout.css';

export class Walmart extends React.Component {
    componentDidMount() {
        this.props.dispatch(getAllDeals());
    }
    render() {
        console.log(this.props);
        let storeMatch= this.props.lists.filter(function(saleItem) {
            return saleItem.seller === "Walmart";
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

Walmart.defaultProps = {
    title: 'Walmart'
};

const mapStateToProps = state => ({
    lists: state.deal.allDeals
});

export default connect(mapStateToProps)(Walmart);