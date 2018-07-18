import React from 'react';

import DealItem from './deal-item';
import {getAllDeals} from '../../actions/dealActions';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

export class DealBoard extends React.Component {
    componentDidMount() {
        this.props.dispatch(getAllDeals());
    }
    render() { 
        return (
            <DealItem saleItems={this.props.lists} />
        );
    }
}

DealBoard.defaultProps = {
    title: 'DealBoard'
};

const mapStateToProps = state => ({
    lists: state.deal.allDeals
});

export default withRouter(connect(mapStateToProps)(DealBoard));