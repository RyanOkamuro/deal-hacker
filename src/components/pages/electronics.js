import React from 'react';

import StoresProductImage from './stores-image';
import StoresProductDescription from './stores-description';
import ElectronicsHeader from './electronics-title';
import {getAllDeals} from '../../actions/dealActions';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import './stores-layout.css';

export class Electronics extends React.Component {
    componentDidMount() {
        this.props.dispatch(getAllDeals());
    }
    render() {
        let storeMatch= this.props.lists.filter(function(saleItem) {
            return saleItem.productCategory === 'Electronics';
        });

        let dealItems= storeMatch.map((dealItem, index) => (
            <div className='row-store' key={index}>
                <StoresProductImage dealItem={dealItem} />
                <StoresProductDescription dealItem={dealItem} />
            </div>        
        ));

        return (
            <div>
                <ElectronicsHeader />
                <div className='store-row-wrapper'>
                    {dealItems}
                </div>
            </div>
        );
    }
}

Electronics.defaultProps = {
    title: 'Electronics'
};

const mapStateToProps = state => ({
    lists: state.deal.allDeals
});

export default withRouter(connect(mapStateToProps)(Electronics));