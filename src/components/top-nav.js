import React from 'react';
import {Link} from 'react-router-dom';
import SearchBar from './search-bar';
import StoresSubmenu from './stores';
import CategoriesSubmenu from './categories';
import LogOut from './logout';

import './top-nav.css';

export default class TopNav extends React.Component {
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
                    <li><Link to={"/favorites"} className="addDeal">Favorites</Link></li>
                    <li><Link to={"/add-deal"} className="addDeal">Add Deal</Link></li>
                    <li><Link to={"/registration"} className="registration">Sign up</Link></li>  
                    <li><Link to={"/login"} className="login">Login</Link></li>
                    <li className="log-out"><LogOut /></li>  
                </ul>
            </nav>
        );
    }
}

