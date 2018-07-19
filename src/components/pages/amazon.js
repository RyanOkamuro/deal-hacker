import React from 'react';

import StoresProductImage from './stores-image';
import StoresProductDescription from './stores-description';
import AmazonHeader from './amazon-title';
import {getAllDeals} from '../../actions/dealActions';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';


import './stores-layout.css';

export class Amazon extends React.Component {
    componentDidMount() {
        this.props.dispatch(getAllDeals());
    }
    render() {
        let storeMatch= this.props.lists.filter(function(saleItem) {
            return saleItem.seller === 'Amazon';
        });
        let dealItems= storeMatch.map((dealItem, index) => (
            <div className='row-store' key={index}>
                <StoresProductImage dealItem={dealItem} />
                <StoresProductDescription dealItem={dealItem} />
            </div>        
        ));

        return (
            <div>
                <AmazonHeader />
                <div className='store-row-wrapper'> 
                    {dealItems}
                </div>
            </div>
        );
    }
}

Amazon.defaultProps = {
    title: 'Amazon'
};

const mapStateToProps = state => ({
    lists: state.deal.allDeals
});

export default withRouter(connect(mapStateToProps)(Amazon));