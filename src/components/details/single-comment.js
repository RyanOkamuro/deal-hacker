import React from 'react';

export default class SingleComment extends React.Component {
    render() {
        return (
            <li>
                {this.props.comment.username} : {this.props.comment.comment}
            </li>
        )
    }
}