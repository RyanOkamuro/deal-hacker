import React from 'react';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import Input from '../pages/input';
import store from '../../store';
import {addComment} from '../../actions/commentActions';
import {connect} from 'react-redux';
import {clearAuth} from '../../actions/auth';
import {clearAuthToken} from '../../local-storage';

import './comments.css';

export class Comments extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }
    onSubmit(values) {
        const id = this.props.allSalesItems.id
        const authToken = store.getState().auth.authToken;
        this.props.dispatch(addComment(values, id, authToken))
            .then(() => console.log('Submitted with values', values))
            .catch(err => {
                const {reason, message, location} = err;
                if (reason === 'ValidationError') {
                    // Convert ValidationErrors into SubmissionErrors for Redux Form
                    return Promise.reject(
                        new SubmissionError({
                            [location]: message
                        })
                    );
                }
                return Promise.reject(
                    new SubmissionError({
                        _error: 'Error submitting message'
                    })
                );
            });
    }
    
    render() {
        let successMessage;
        if (this.props.submitSucceeded) {
            successMessage = (
                <div className="message message-success">
                    Message submitted successfully
                </div>
            );
        }

        let errorMessage;
        if (this.props.error) {
            errorMessage = (
                <div className="message message-error">{this.props.error}</div>
            );
        }
        
        let userDealComments;
        if (this.props.loggedIn) {
            userDealComments = (
            <div className="box3">
                <form className="user-comments-form"
                    onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values)
                    )}>
                    <Field          
                        name="userComment" 
                        element="textarea"
                        rows="15" 
                        component={Input}
                        label="Leave a comment"
                    />
                    <button 
                        type="submit"
                        //Here we disable the button if it is pristine (i.e. if the user hasn't entered anything into the field) or it is submitting.
                        disabled={this.props.pristine || this.props.submitting}>
                        Submit
                    </button>
                </form>
            </div>
        );
        }
        return (
            <div className="col-12">
                {userDealComments}
            </div>
        )
    }
}

Comments = reduxForm({
    form: 'user-comments-form',
    //Automatically focus on first incomplete field when the user submits incorrect value for a field
    onSubmitFail: (errors, dispatch) => {
    if(errors !== undefined) {
        dispatch(focus('user-comments-form', Object.keys(errors)[0]))
    }
}})(Comments);

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Comments);

