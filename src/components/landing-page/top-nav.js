import React from 'react';
import Menu from './menu';
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
                <div onMouseLeave={this.handleLeave}><a className="menu" onClick={this.toggleDropDown} onMouseEnter={this.handleHover}>Menu</a>
                    {this.state.showMainMenu && <Menu />}
                </div>
            </nav>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(TopNav));