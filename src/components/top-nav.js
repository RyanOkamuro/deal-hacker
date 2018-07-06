import React from 'react';
import {Link} from 'react-router-dom';
import SearchBar from './search-bar';
import StoresSubmenu from './stores';
import CategoriesSubmenu from './categories';
import LogOut from './logout';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

import './top-nav.css';

export class TopNav extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    constructor(props) {
        super(props);
        this.state = {
            showStoresMenu: false,
            showCategoriesMenu: false
        };
    }

    handleHover = () => {
        this.setState({ showStoresMenu: true });
    };

    handleLeave = () => {
        this.setState({ showStoresMenu: false });
    };

    handleHover2 = () => {
        this.setState({ showCategoriesMenu: true });
    };

    handleLeave2 = () => {
        this.setState({ showCategoriesMenu: false });
    };
    
    render() {
        let addDealLink;
        let favoriteLink;
        if (this.props.loggedIn) {
            addDealLink = (
                <Link to={"/add-deal"} className="addDeal">Add Deal</Link>
            )
            favoriteLink = (
                <Link to={"/favorites"} className="addDeal">Favorites</Link>
            )
        } 
        return (
            <nav> 
                <ul className="navigation">
                    <li><Link to={"/"} className="home">Home</Link></li>
                    <li className="nav__menu-stores" onMouseLeave={this.handleLeave}><a onMouseEnter={this.handleHover}>Stores</a>
                        {this.state.showStoresMenu && <StoresSubmenu />}
                    </li>
                    <li className="nav__menu-categories" onMouseLeave={this.handleLeave2}><a onMouseEnter={this.handleHover2}>Categories</a>
                        {this.state.showCategoriesMenu && <CategoriesSubmenu />}
                    </li>
                    <li>
                        <SearchBar />
                    </li>
                    <li>{favoriteLink}</li>
                    <li>{addDealLink}</li>
                    <li><Link to={"/registration"} className="registration">Sign up</Link></li>  
                    <li><Link to={"/login"} className="login">Login</Link></li>
                    <li className="log-out"><LogOut /></li>  
                </ul>
            </nav>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(TopNav);