import React from 'react';

export default class SingleComment extends React.Component {
    render() {
        console.log(this.props);
        return (
            <li>
                {this.props.comment.userComment}
            </li>
        )
    }
}