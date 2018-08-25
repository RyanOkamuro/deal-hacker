import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {removeOneFavorite} from '../../actions/favoriteActions';
import ReactConfirmAlert, { confirmAlert } from 'react-confirm-alert';

class FavoriteRemoveButton extends React.Component {
    constructor(props){
        super(props);
        this.removeOneFavorite=this.removeOneFavorite.bind(this)
    }

    state = {
        showDialog: false,
      }
   
    removeOneFavorite(dealId) {
        this.props.dispatch(removeOneFavorite(dealId._id));
    }
    render() {
        // return (
        //     <div>
        //         <img src='http://www.glenviewhealthclub.com/wp-content/uploads/x-mark.png'></img>
        //       {
        //         this.state.showDialog &&
        //         <ReactConfirmAlert
        //           title="Confirm to submit"
        //           message="Are you sure to do this."
        //           confirmLabel="Confirm"
        //           cancelLabel="Cancel"
        //           onConfirm={() => this.removeOneFavorite(this.props.favoriteItemDetail)}
        //         />
        //       }
              

        //     </div>
        //   );

        // confirmAlert({
        //     customUI: ({ onClose }) => {
        //       return (
        //         <div className='custom-ui'>
        //           <h1>Are you sure?</h1>
        //           <p>You want to delete this file?</p>
        //           <button onClick={onClose}>No</button>
        //           <button onClick={() => {
        //               this.removeOneFavorite(this.props.favoriteItemDetail)
        //               onClose()
        //           }}>Yes, Delete it!</button>
        //         </div>
        //       )
        //     }
        //   })

        return (
            <img src='http://www.glenviewhealthclub.com/wp-content/uploads/x-mark.png' onClick={() => this.removeOneFavorite(this.props.favoriteItemDetail)} className='removeFavoriteButton' alt='removeButton'></img>
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