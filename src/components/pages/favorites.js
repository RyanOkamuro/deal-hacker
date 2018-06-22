import React from 'react';
import {connect} from 'react-redux';
import FavoriteStar from '../favorite-star';
// import StoresProductImage from './stores-image';
// import StoresProductDescription from './stores-description';

import './stores-layout.css';

class Favorites extends React.Component {
    render() {
        return (
            <div className="store-row-wrapper">
                <div className="row-store">
                    {/* {myfavorite} */}
                    {/* <StoresProductImage saleItems={this.props.saleItems} />
                    <StoresProductDescription saleItems={this.props.saleItems} /> */}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {myFavorite: state.myFavorite}
};

export default connect(mapStateToProps)(Favorites);