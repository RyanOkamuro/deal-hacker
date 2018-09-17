import React from 'react';
import Moment from 'react-moment';
import CommentRemoveButton from './comment-remove-button';

export default class SingleComment extends React.Component {
    render() {
        const userComment = (
            <div className='comment-box'>
                <CommentRemoveButton comment={this.props.comment} />
                <span className='comment-username'> {this.props.comment.username}: <span className='comment-date'><Moment format='MM-DD-YYYY HH:mm'>{this.props.comment.commentCreatedAt}</Moment></span></span> <br/>
                <p className='user-comment'>{this.props.comment.comment}</p>
            </div>
        )
        return (
            <li>
                {userComment}
            </li>
        )
    }
}