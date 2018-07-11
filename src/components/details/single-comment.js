import React from 'react';

export default class SingleComment extends React.Component {
    render() {
        return (
            <li>
                <span className="comment-username"> {this.props.comment.username}: </span><br/>
                {this.props.comment.comment}
            </li>
        )
    }
}