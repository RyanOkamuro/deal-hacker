import React from 'react';

export default class OneComment extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                {this.props.usersComment.username}: {this.props.usersComment.comment}
                
            </div>
        )
    }
}