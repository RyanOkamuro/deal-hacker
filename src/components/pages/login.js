import React from "react";

export default class Login extends React.Component {
    render() {
        return (
            <form className="login-form">
                <fieldset name="login-now">
                    <legend>Sign In</legend>
                        <label htmlFor="js-user-login-name" className="user-login-name">User Name</label>
                        <input placeholder="DealHunter" type="text" name="js-user-login-name" id="js-user-login-name" required/>
                        <label htmlFor="js-user-login-password" className="new-user-login-password">Password</label>
                        <input placeholder="password" type="text" name="js-user-login-password" id="js-user-login-password" required/>
                        <button type="submit" className="js-login-user">Login</button>
                </fieldset>
            </form>
        );
    }
}