import React from 'react';
import TestAccount from './test-account';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

import LoginForm from './login-form';

export function LoginPage(props) {
    // If we are logged in redirect straight to the main deal page
    if (props.loggedIn) {
        return <Redirect to="/" />;
    }

    return (
        <div className="login-page">
            <h3>Login</h3>
            <LoginForm />
            <Link to="/registration" className="registration">Register</Link>
            <TestAccount />
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(LoginPage));