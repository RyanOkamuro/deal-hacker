import React from 'react';
import Moment from 'react-moment';

export default class SingleComment extends React.Component {
    render() {
        return (
            <li>
                <span className="comment-username"> {this.props.comment.username}: <span className="comment-date"><Moment format="MM-DD-YYYY HH:mm">{this.props.comment.commentCreatedAt}</Moment></span></span> <br/>
                <p className="user-comment">{this.props.comment.comment}</p>
            </li>
        )
    }
}