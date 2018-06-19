import React from "react";
// import {reduxForm, Field, SubmissionError, focus} from "redux-form";
// import Input from '.pages/../input';
// import {required, nonEmpty} from '../../validators';

import './comments.css';

export default class Comments extends React.Component {
    render() {
        const userDealComments = (
            <div className="box3">
                <form className="user-comments-form">
                    <fieldset name="deal-comments">
                        <legend>Deal Comments</legend>
                            <label htmlFor="js-user-comment-thread" className="new-user-comment">Leave a Comment</label>
                            <textarea name="js-new-content" rows="15" required/>
                            <button type="submit" className="js-add-new-comment">Submit</button>
                    </fieldset>
                </form>
            </div>
        );
        return (
            <div className="col-12">
                {userDealComments}
            </div>
            
        )
    }
}