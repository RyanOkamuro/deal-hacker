import React from 'react';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import Input from '../pages/input';
import {API_BASE_URL} from '../../config';
import store from '../../store';

import './comments.css';

export class Comments extends React.Component {
    onSubmit(values) {
        const id = this.props.allSalesItems.id
        const authToken = store.getState().auth.authToken;
        return fetch(`${API_BASE_URL}/comments/${id}`, {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            },
            'dataType': 'json',
            body: JSON.stringify(values)
        })
            .then(res => {
                if (!res.ok) {
                    if (
                        res.headers.has('content-type') &&
                        res.headers
                            .get('content-type')
                            .startsWith('application/json')
                    ) {
                        //Detailed JSON error response
                        return res.json().then(err => Promise.reject(err));
                    }
                    // Less informative error returned by express
                    return Promise.reject({
                        code: res.status,
                        message: res.statusText
                    });
                }
                if (res.ok) {
                    return res.json().then(comments => {
                        console.log(comments);
                     this.props.dispatch({type: 'GET_UPDATED_COMMENTS_SUCCESS', comments})
                })
                }
                return;
            })
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
        
        const userDealComments = (
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
        return (
            <div className="col-12">
                {userDealComments}
            </div>
        )
    }
}

export default reduxForm({
    form: 'user-comments-form',
    //Automatically focus on first incomplete field when the user submits incorrect value for a field
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('contact', Object.keys(errors)[0]))
})(Comments);