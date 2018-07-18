import React from 'react';

import StoresProductImage from './stores-image';
import StoresProductDescription from './stores-description';
import {getAllDeals} from '../../actions/dealActions';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import HomeNeedsHeader from './homeneeds-title';

import './stores-layout.css';

export class HomeNeeds extends React.Component {
    componentDidMount() {
        this.props.dispatch(getAllDeals());
    }
    render() {
        console.log(this.props);
        let storeMatch= this.props.lists.filter(function(saleItem) {
            return saleItem.productCategory === "Home Needs";
        });

        let dealItems= storeMatch.map((dealItem, index) => (
            <div className="row-store" key={index}>
                <StoresProductImage dealItem={dealItem} />
                <StoresProductDescription dealItem={dealItem} />
            </div>        
        ));

        return (
            <div>
                <HomeNeedsHeader />
                <div className="store-row-wrapper">
                    {dealItems}
                </div>
            </div>
        );
    }
}

HomeNeeds.defaultProps = {
    title: 'HomeNeeds'
};

const mapStateToProps = state => ({
    lists: state.deal.allDeals
});

export default withRouter(connect(mapStateToProps)(HomeNeeds));