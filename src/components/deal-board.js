import React from 'react';

import DealItem from './deal-item';
import {getAllDeals} from '../actions/getDeal';
import {connect} from 'react-redux';

import './deal-board.css';

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
    lists: state.getDeal.allDeals
});

export default connect(mapStateToProps)(DealBoard);