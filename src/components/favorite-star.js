import React from 'react';
import {connect} from 'react-redux';

import {addFavorite} from '../actions';

class FavoriteStar extends React.Component {
    constructor(props){
        super(props);
        this.addFavorite=this.addFavorite.bind(this)
    }
   
    addFavorite(deal) {
        this.props.dispatch(addFavorite(deal));
    }
    render() {
        return (
            <img src={this.props.favoriteItem.favorite} onClick={() => this.addFavorite(this.props.favoriteItem)} className={this.props.favoriteItem.favoriteClass} alt="favorite"></img>
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