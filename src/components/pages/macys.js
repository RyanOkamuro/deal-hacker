import React from 'react';

import StoresProductImage from './stores-image';
import StoresProductDescription from './stores-description';
import MacysHeader from './macys-title';
import {getAllDeals} from '../../actions/dealActions';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import './stores-layout.css';

export class Macys extends React.Component {
    componentDidMount() {
        this.props.dispatch(getAllDeals());
    }
    render() {
        let storeMatch= this.props.lists.filter(function(saleItem) {
            return saleItem.seller === `Macy's`;
        });

        let dealItems= storeMatch.map((dealItem, index) => (
            <div className='row-store' key={index}>
                <StoresProductImage dealItem={dealItem} />
                <StoresProductDescription dealItem={dealItem} />
            </div>        
        ));

        return (
            <div> 
                <MacysHeader />
                <div className="store-row-wrapper">
                    {dealItems}
                </div>
            </div>
        );
    }
}

Macys.defaultProps = {
    title: 'Macys'
};

const mapStateToProps = state => ({
    lists: state.deal.allDeals
});

export default withRouter(connect(mapStateToProps)(Macys));