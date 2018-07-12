import React from 'react';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import Input from './input';
import {editedDeal} from '../../actions/dealActions';
import {connect} from 'react-redux';
// import {Redirect} from 'react-router-dom';

import "./edit-deal.css";
export class EditDeal extends React.Component {
    onSubmit(values, productID) {
        this.props.dispatch(editedDeal(values, productID))
            .then(() => console.log('Submitted with values', values))
            .catch(err => {
                console.log(err);
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
    onSubmitFail: (errors, dispatch) => {
    if(errors !== undefined) {
        dispatch(focus('edit-form', Object.keys(errors)[0]))
    }
}})(EditDeal);


// const mapStateToProps = state => ({
//     // dealList: state.deal.allDeals
// });

// export default connect(mapStateToProps)(EditDeal);