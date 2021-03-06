import React from 'react';

import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../../actions/users';
import {login} from '../../actions/auth';
import Input from './input';
import {required, nonEmpty, matches, length, isTrimmed} from '../../validators';

import './registration-form.css';

const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {
    onSubmit(values) {
        const {username, password, firstName, lastName} = values;
        const user = {username, password, firstName, lastName};
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(username, password)));
    }

    render() {
        return (
            <form
                role='form' 
                className='signup-form'
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <label htmlFor='firstName'>First name</label>
                <Field 
                    component={Input} 
                    type='text' 
                    name='firstName' 
                    validate={[required, nonEmpty, isTrimmed]}
                />
                <label htmlFor='lastName'>Last name</label>
                <Field 
                    component={Input} 
                    type='text' 
                    name='lastName'
                    validate={[required, nonEmpty, isTrimmed]}
                />
                <label htmlFor='username'>Username</label>
                <Field
                    component={Input}
                    type='text'
                    name='username'
                    validate={[required, nonEmpty, isTrimmed]}
                />
                <label htmlFor='password'>Password</label>
                <Field
                    component={Input}
                    type='password'
                    name='password'
                    validate={[required, passwordLength, isTrimmed]}
                />
                <label htmlFor='passwordConfirm'>Confirm password</label>
                <Field
                    component={Input}
                    type='password'
                    name='passwordConfirm'
                    validate={[required, nonEmpty, matchesPassword]}
                />
                <button
                    role='button'
                    type='submit'
                    disabled={this.props.pristine || this.props.submitting}>
                    Register
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'registration',
    //Automatically focus on first incomplete field when the user submits incorrect value for a field
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);
