import React from "react";

export default class Signup extends React.Component {
    render() {
        return (
            <form className="signup-form">
                <fieldset name="signup-now">
                    <legend>Sign up</legend>
                        <label htmlFor="js-user-name" className="new-user-name">User Name</label>
                        <input placeholder="DealHunter" type="text" name="js-user-name" id="js-user-name" required/>
                        <label htmlFor="js-user-first-name" className="new-user-first-name">First Name</label>
                        <input placeholder="Jane" type="text" name="js-user-first-name" id="js-user-first-name" required/>
                        <label htmlFor="js-user-last-name" className="new-user-last-name">Last Name</label>
                        <input placeholder="LeMans" type="text" name="js-user-last-name" id="js-user-last-name" required/>
                        <label htmlFor="js-user-password" className="new-user-password">Password</label>
                        <input placeholder="password" type="text" name="js-user-password" id="js-user-password" required/>
                        <button type="submit" className="js-add-new-user">Submit</button>
                </fieldset>
            </form>
        );
    }
}