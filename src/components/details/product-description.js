import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {clearAuth} from '../../actions/auth';
import {clearAuthToken} from '../../local-storage';

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
                <Link to={editItem}><button className="btn">Edit</button></Link>
            )
        }

        const productDetails = (
            <div className="box2">
                <p>${this.props.allSalesItems.price}</p>
                <a href={this.props.allSalesItems.dealLink}>{this.props.allSalesItems.dealName}</a>
                <p>{this.props.allSalesItems.productDescription}</p>
                {editButton}
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

export default connect(mapStateToProps)(ProductDescription);