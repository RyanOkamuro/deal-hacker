import React from 'react';
import {connect} from 'react-redux';

import {removeOneFavorite} from '../../actions/favoriteActions';

class FavoriteRemoveButton extends React.Component {
    constructor(props){
        super(props);
        this.removeOneFavorite=this.removeOneFavorite.bind(this)
    }
   
    removeOneFavorite(dealId) {
        console.log(dealId._id);
        this.props.dispatch(removeOneFavorite(dealId._id));
    }
    render() {
        console.log(this.props);
        return (
            <img src={this.props.favoriteItemDetail.favoriteDeleteButton} onClick={() => this.removeOneFavorite(this.props.favoriteItemDetail)} className={this.props.favoriteItemDetail.favoriteClass} alt="removeButton"></img>
        )
    }
}

FavoriteRemoveButton.defaultProps = {
    deal: 'FavoriteRemoveButton'
};

const mapStateToProps = state => ({
    myFavorite: state.myFavorite
});

export default connect(mapStateToProps)(FavoriteRemoveButton);