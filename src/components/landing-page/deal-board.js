import React from 'react';

import DealItem from './deal-item';
import {getAllDeals} from '../../actions/dealActions';
import {connect} from 'react-redux';

export class DealBoard extends React.Component {
    componentDidMount() {
        this.props.dispatch(getAllDeals());
    }
    render() { 
        return (
            <div>
                <DealItem saleItems={this.props.lists} />
            </div>
        );
    }
}

DealBoard.defaultProps = {
    title: 'DealBoard'
};

const mapStateToProps = state => ({
    lists: state.deal.allDeals
});

export default connect(mapStateToProps)(DealBoard);