import React from 'react';

import './test-account.css';

export default class TestAccount extends React.Component {
    render() {
        return (
        <ul className="test-account">
            <li>Test Account: TestUser</li>
            <li>Password: Password1234</li>
        </ul>
        );
    }
}