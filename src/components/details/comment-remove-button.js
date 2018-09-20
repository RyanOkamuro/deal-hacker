import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../../actions/auth';
import {clearAuthToken} from '../../local-storage';
import {withRouter} from 'react-router-dom';
import {removeOneComment} from '../../actions/commentActions';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'

let userId;

class CommentRemoveButton extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    constructor(props){
        super(props);
        this.removeOneComment=this.removeOneComment.bind(this)
    }

    submit = () => {
        confirmAlert({
            customUI: ({ onClose }) => {
              return (
                <div className='custom-ui'>
                  <p className='confirmation-mssg'>Do you want to remove this comment?</p>
                  <div className='button-container'>
                    <button role='button' className='confirmation-yes' onClick={() => {
                        this.removeOneComment(this.props.comment, this.props.comment.deal_id)
                        onClose()
                    }}>Yes</button>
                    <button role='button' className='confirmation-no' onClick={onClose}>No</button>
                  </div>
                </div>
              )
            }
          })
      };
   
    removeOneComment(comment, dealId) {
        this.props.dispatch(removeOneComment(comment._id, dealId));
    }
    render() {
        let userComment = this.props.comment;
        let userCommentId = userComment['user']
        let commentRemoveButtonImage;
        if (this.props.loggedIn && userCommentId === userId) {
            commentRemoveButtonImage = (
                <img src='http://www.glenviewhealthclub.com/wp-content/uploads/x-mark.png' onClick={() => this.submit()} className='removeCommentButton' alt='removeButton'></img>
            )
        }    
        return (
            <div>
                {commentRemoveButtonImage}
            </div>
        )
    }
}

CommentRemoveButton.defaultProps = {
    deal: 'CommentRemoveButton'
};

const mapStateToProps = state => {
    let user = state.auth.currentUser
    if(user !== null) {
        userId = user['id']
    }
return {
    commentList: state.comment.allComments,
    loggedIn: state.auth.currentUser !== null
}
};

export default withRouter(connect(mapStateToProps)(CommentRemoveButton));