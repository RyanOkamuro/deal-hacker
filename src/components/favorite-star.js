import React from 'react';
import {connect} from 'react-redux';

import {addNewFavorite} from '../actions';

class FavoriteStar extends React.Component {
    constructor(props){
        super(props);
        this.addNewFavorite=this.addNewFavorite.bind(this)
    }
   
    addNewFavorite(deal) {
        this.props.dispatch(addNewFavorite(deal));
    }
    render() {
        return (
            <img src={this.props.favoriteItem.favorite} onClick={() => this.addNewFavorite(this.props.favoriteItem.id)} className={this.props.favoriteItem.favoriteClass} alt="favorite"></img>
        )
    }
}

FavoriteStar.defaultProps = {
    deal: 'FavoriteStar'
};

const mapStateToProps = state => ({
    myFavorite: state.myFavorite
});

export default connect(mapStateToProps)(FavoriteStar);