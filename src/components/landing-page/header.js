import React from 'react';

import TopNav from './top-nav';

import './header.css';

export default class Header extends React.Component {
    render() {
        return (
        <header>
            <TopNav />
            <h1>Deal Hacker</h1>
        </header>
        );
    }
}