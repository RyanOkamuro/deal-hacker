import React from 'react';

import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import Input from './input';
import store from '../../store';
import {addDeal} from '../../actions/dealActions';
import {required, nonEmpty} from '../../validators';
import {Redirect} from 'react-router-dom';

import './add-new-deal.css';

export class AddNewDealForm extends React.Component {
    onSubmit(values) {
        const authToken = store.getState().auth.authToken;
        this.props.dispatch(addDeal(values, authToken))
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
                <div className='message message-success'>
                    Message submitted successfully
                </div>
            );
            return <Redirect to='/'/>
        }

        let errorMessage;
        if (this.props.error) {
            errorMessage = (
                <div className='message message-error'>{this.props.error}</div>
            );
        }

        return (
            <form role='form' className='new-deal-form'
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {successMessage}
                {errorMessage}
                <Field          
                    name='dealName'  
                    type='text' 
                    component={Input}
                    label='Item Name'
                    validate={[required, nonEmpty]} 
                />
                <label>Product Category</label>
                <Field          
                    name='productCategory'  
                    component='select'>
                    <option></option>
                    <option value='Electronics'>Electronics</option>
                    <option value='Home Needs'>Home Needs</option>
                    <option value='Jewlery'>Jewlery</option>
                </ Field>
                <Field          
                    name='price'  
                    type='text' 
                    component={Input}
                    label='Price'
                    validate={[required, nonEmpty]} 
                />
                <Field          
                    name='image'  
                    type='text' 
                    component={Input}
                    label='Image URL'
                    validate={[required, nonEmpty]} 
                />
                <Field          
                    name='seller'  
                    type='text'
                    component={Input}
                    label='Seller'
                    validate={[required, nonEmpty]} 
                />
                <Field          
                    name='productDescription' 
                    element='textarea'
                    component={Input}
                    label='Product Description'
                    validate={[required, nonEmpty]} 
                />
                <Field          
                    name='dealLink'  
                    type='text'
                    component={Input}
                    label='Deal URL'
                    validate={[required, nonEmpty]} 
                />
                <button 
                    role='button'
                    type='submit'
                    //Here we disable the button if it is pristine (i.e. if the user hasn't entered anything into the field) or it is submitting.
                    disabled={this.props.pristine || this.props.submitting}>
                    Submit
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'new-deal',
    //Automatically focus on first incomplete field when the user submits incorrect value for a field
    onSubmitFail: (errors, dispatch) => {
    if(errors !== undefined) {
        dispatch(focus('new-deal', Object.keys(errors)[0]))
    }
}})(AddNewDealForm);
