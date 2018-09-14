import React from 'react';
import MainMenu from './menu';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import './top-nav.css';

export class TopNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMainMenu: false
        };
    }
    
    handleHover = () => {
        this.setState({ showMainMenu: true });
    };

    handleLeave = () => {
        this.setState({ showMainMenu: false });
    };

    toggleDropDown = () => {
        this.setState({showMainMenu: !this.state.showMainMenu});
    }
    render() {
        return (
            <nav> 
                <MainMenu />
            </nav>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(TopNav));