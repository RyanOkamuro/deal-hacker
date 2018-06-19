import React from "react";
import {reduxForm, Field, SubmissionError, focus} from "redux-form";
import Input from './input';
import {required, nonEmpty} from '../../validators';

import "./add-new-deal.css";

export class AddNewDealForm extends React.Component {
    onSubmit(values) {
        return fetch('/api/messages', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json'
            }
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

        return (
            <form className="new-deal-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <Field          
                    name="deal-name"  
                    type="text" 
                    component={Input}
                    label="Item Name"
                    validate={[required, nonEmpty]} 
                />
                <Field          
                    name="deal-price"  
                    type="text" 
                    component={Input}
                    label="Price"
                    validate={[required, nonEmpty]} 
                />
                <Field          
                    name="deal-image"  
                    type="text" 
                    component={Input}
                    label="Image URL"
                    validate={[required, nonEmpty]} 
                />
                <Field          
                    name="deal-seller"  
                    type="text" 
                    component={Input}
                    label="Seller"
                    validate={[required, nonEmpty]} 
                />
                <Field          
                    name="deal-product-description"  
                    element="textarea"
                    rows="15" 
                    component={Input}
                    label="Product Description"
                    validate={[required, nonEmpty]} 
                />
                <Field          
                    name="deal-link"  
                    type="text"
                    component={Input}
                    label="Deal URL"
                    validate={[required, nonEmpty]} 
                />
                <button 
                    type="submit"
                    //Here we disable the button if it is pristine (i.e. if the user hasn't entered anything into the field) or it is submitting.
                    disabled={this.props.pristine || this.props.submitting}>
                    Submit
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'new-deal-form',
    //Automatically focus on first incomplete field when the user submits incorrect value for a field
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('contact', Object.keys(errors)[0]))
})(AddNewDealForm);