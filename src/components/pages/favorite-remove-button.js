import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {removeOneFavorite} from '../../actions/favoriteActions';

class FavoriteRemoveButton extends React.Component {
    constructor(props){
        super(props);
        this.removeOneFavorite=this.removeOneFavorite.bind(this)
    }
   
    removeOneFavorite(dealId) {
        this.props.dispatch(removeOneFavorite(dealId._id));
    }
    render() {
        return (
            <img src="http://www.glenviewhealthclub.com/wp-content/uploads/x-mark.png" onClick={() => this.removeOneFavorite(this.props.favoriteItemDetail)} className="favorite" alt="removeButton"></img>
        )
    }
}

FavoriteRemoveButton.defaultProps = {
    deal: 'FavoriteRemoveButton'
};

const mapStateToProps = state => ({
    myFavorite: state.myFavorite
});

export default withRouter(connect(mapStateToProps)(FavoriteRemoveButton));