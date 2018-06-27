import React from 'react';
import {connect} from 'react-redux';
// import requiresLogin from './requires-login';
// import {fetchProtectedData} from '../actions/protected-data';
import FavoriteProductImage from './favorites-image';
import FavoriteProductDescription from './favorites-description';

import './stores-layout.css';

class Favorites extends React.Component {
    // componentDidMount() {
    //     this.props.dispatch(fetchProtectedData());
    // }
    render() {
        console.log(this.props.favorite.dealItems);
        const favoriteItemDetails = this.props.favorite.dealItems.map((favoriteItemDetail, index) => (
            <div className="row-store" key={index}>
                <FavoriteProductImage favoriteItemDetail={favoriteItemDetail} />
                <FavoriteProductDescription favoriteItemDetail={favoriteItemDetail} />
            </div>
        ));
        return (
            <div className="store-row-wrapper">
                {favoriteItemDetails}
            </div>
        );
    }
}

const mapStateToProps = state => {
    // const {currentUser} = state.auth;
    return {favorite: state.favorite}
//     {
//         username: state.auth.currentUser.username,
//         name: `${currentUser.firstName} ${currentUser.lastName}`,
//         protectedData: state.protectedData.data
//     };
// };

};

export default connect(mapStateToProps)(Favorites);
// export default requiresLogin()(connect(mapStateToProps)(Favorites));
