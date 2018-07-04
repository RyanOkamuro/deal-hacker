import React from 'react';

import StoresProductImage from './stores-image';
import StoresProductDescription from './stores-description';
import {getAllDeals} from '../../actions/dealActions';
import {connect} from 'react-redux';

import './stores-layout.css';


export class BestBuy extends React.Component {
    componentDidMount() {
        this.props.dispatch(getAllDeals());
    }
    render() {
        console.log(this.props);
        let storeMatch= this.props.lists.filter(function(saleItem) {
            return saleItem.seller === "Best Buy";
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

BestBuy.defaultProps = {
    title: 'BestBuy'
};

const mapStateToProps = state => ({
    lists: state.deal.allDeals
});

export default connect(mapStateToProps)(BestBuy);