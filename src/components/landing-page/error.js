import React from 'react';

import './error.css';

export default class Error extends React.Component {
    render() {
        return (
            <div>
                <p className='error'>Error: Page does not exist</p>
            </div>
        );
    }
}