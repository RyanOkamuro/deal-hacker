import React from 'react';
import OneComment from './one-comment';

export default class SingleComment extends React.Component {
    render() {

        const oneComment = this.props.comment.comments.map((usersComment, index) => (
            <div key={index}>
                <OneComment usersComment={usersComment} />
            </div>
        ));
        console.log(oneComment);
        
        return (
            <li>
                {oneComment}
            </li>
        )
    }
}