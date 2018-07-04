import React from 'react';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import Input from './input';
import {API_BASE_URL} from '../../config';
// import {Redirect} from 'react-router-dom';

import "./edit-deal.css";
export class EditDeal extends React.Component {
    onSubmit(values, productID) {
        return fetch(`${API_BASE_URL}/deal/${productID}`, {
            method: 'PUT',
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
                if (res.ok) {
                    // return <Redirect to="/" />
                    return res.json().then(data => this.props.dispatch({type: 'UPDATE_DEAL_SUCCESS', data}))
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
        console.log(this.props.history.location.id);
        const productID = this.props.history.location.id;
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
            <form className="edit-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values, productID)
                )}>
                <Field          
                    name="dealName"  
                    type="text" 
                    component={Input}
                    label="Item Name"
                />
                <label>Product Category</label>
                <Field          
                    name="productCategory"  
                    component="select">
                    <option></option>
                    <option value="Electronics">Electronics</option>
                    <option value="Home Needs">Home Needs</option>
                    <option value="Jewlery">Jewlery</option>
                </ Field>
                <Field          
                    name="price"  
                    type="text" 
                    component={Input}
                    label="Price"
                />
                <Field          
                    name="image"  
                    type="text" 
                    component={Input}
                    label="Image URL"
                />
                <Field          
                    name="seller"  
                    type="text" 
                    component={Input}
                    label="Seller"
                />
                <Field          
                    name="productDescription"  
                    element="textarea"
                    rows="15" 
                    component={Input}
                    label="Product Description"
                />
                <Field          
                    name="dealLink"  
                    type="text" 
                    component={Input}
                    label="Deal Link"
                />
                <button 
                    type="submit"
                    //Here we disable the button if it is pristine (i.e. if the user hasn't entered anything into the field) or it is submitting.
                    disabled={this.props.pristine || this.props.submitting}>
                    Update
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'edit-form',
    //Automatically focus on first incomplete field when the user submits incorrect value for a field
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('contact', Object.keys(errors)[0]))
})(EditDeal);
