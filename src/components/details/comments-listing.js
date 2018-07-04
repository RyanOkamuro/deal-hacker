import React from 'react';
import {getAllComments} from '../../actions/getComments';
import SingleComment from './single-comment';
import {connect} from 'react-redux';

import './comments-listing.css';

export class CommentsListing extends React.Component {
    componentDidMount() {
        const id = this.props.allSalesItems.id
        this.props.dispatch(getAllComments(id));
    }
    render() {
        const userComments = this.props.commentList.filter(item => item._id === this.props.allSalesItems.id).map((comment, index) => (
            <ul className="comment-list" key={index}>
                <SingleComment comment={comment} />
            </ul>
        ))
        return (
            <div className="comment-area">
                {userComments}
            </div> 
        )
    }
}

CommentsListing.defaultProps = {
    title: 'CommentsListing'
};

const mapStateToProps = state => ({
    commentList: state.getComments.allComments
});

export default connect(mapStateToProps)(CommentsListing);