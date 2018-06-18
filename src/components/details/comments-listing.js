import React from 'react';

import './comments-listing.css';

export default class CommentsListing extends React.Component {
    render() {
        const userDealCommentsListing = (
            <li className="comment-list">
                "hi"
            </li>
        );
        return (
            <ul className="comment-area">
                {userDealCommentsListing}
            </ul>
            
        )
    }
}