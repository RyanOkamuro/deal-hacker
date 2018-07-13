import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {clearAuth} from '../../actions/auth';
import {clearAuthToken} from '../../local-storage';
import Moment from 'react-moment';
import {withRouter} from 'react-router-dom';

export class ProductDescription extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }
    render() {
        let editButton;
        const editItem = {
            pathname: "/edit-deal/" + this.props.allSalesItems.id,
            id: this.props.allSalesItems.id
        };
        if (this.props.loggedIn) {
            editButton = (
                <Link to={editItem}><p className="edit-button">Edit</p></Link>
            )
        }
        
        console.log(this.props.allSalesItems.createdAt);
        const productDetails = (
            <div className="box2">
                <p className="deal-sale-price">${this.props.allSalesItems.price}
                <a href={this.props.allSalesItems.dealLink} className="deal-link">Deal Link</a>
                </p>
                <p className="deal-description">{this.props.allSalesItems.productDescription}</p>
                {editButton}
                <p className="deal-post-time"><Moment format="MM-DD-YYYY HH:mm">{this.props.allSalesItems.createdAt}</Moment></p>
            </div>
        );   
        return (
            <div className="col-8">
                {productDetails}   
            </div> 
        )
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(ProductDescription));