import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

export class LogOut extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        // Only render the log out link if we are logged in
        let logOutLink;
        if (this.props.loggedIn) {
            logOutLink = (
                <div onClick={() => this.logOut()}>Log out</div>
            );
        }
        return (
            <div className="log-out">
                {logOutLink}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LogOut);