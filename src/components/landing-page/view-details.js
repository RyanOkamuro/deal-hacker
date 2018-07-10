import React from 'react';
import {Link} from 'react-router-dom';
import {getAllDeals} from '../../actions/dealActions';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import './view-details.css';

export default class ViewDetails extends React.Component {
    // componentDidMount() {
    //     this.props.dispatch(getAllDeals());
    // }
    render() {
        // console.log(this.props.saleItem.id, "!!!!!!!!!!");
        // console.log(this.props);
        const salesItem = {
            pathname: "/details/detail-information/"+ this.props.saleItem.id,
            allSalesItems: this.props.saleItem
        };
        return (
            <div>
                <Link to={salesItem}><button className="detail-button">Details</button></Link>
            </div>
        )
    }
}

// ViewDetails.defaultProps = {
//     title: 'ViewDetails'
// };

// const mapStateToProps = state => {
//     // console.log(state);
//     return {
//     salesItem: state.deal.allDeals
//     }
// };

// export default withRouter(connect(mapStateToProps)(ViewDetails));