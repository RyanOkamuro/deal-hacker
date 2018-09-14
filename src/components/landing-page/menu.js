import React from 'react';

import StoresSubmenu from './stores';
import CategoriesSubmenu from './categories';
import {Link} from 'react-router-dom';
import {clearAuth} from '../../actions/auth';
import {clearAuthToken} from '../../local-storage';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { slide as Menu } from 'react-burger-menu'

export class MainMenu extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    constructor(props) {
        super(props);
        this.state = {
            showStoresMenu: false,
            showCategoriesMenu: false,
            showMenu: false
        };
    }

    // handleHover = () => {
    //     this.setState({ showStoresMenu: true });
    // };

    // handleLeave = () => {
    //     this.setState({ showStoresMenu: false });
    // };

    toggleDropDown = () => {
        this.setState({ showStoresMenu: !this.state.showStoresMenu});
    }

    // handleHover2 = () => {
    //     this.setState({ showCategoriesMenu: true });
    // };

    // handleLeave2 = () => {
    //     this.setState({ showCategoriesMenu: false });
    // };

    toggleDropDown2 = () => {
        this.setState({ showCategoriesMenu: !this.state.showCategoriesMenu});
    }
    // toggleDropDown3 = () => {
    //     this.setState({ showMenu: !this.state.showMenu});
    // }

    render() {
        let addDealLink;
        let favoriteLink;
        let logOutLink;
        if (this.props.loggedIn) {
            addDealLink = (
                <Link to={'/add-deal'} className='addDeal'>Add Deal</Link>
            )
            favoriteLink = (
                <Link to={'/favorites'} className='addDeal'>Favorites</Link>
            )
            logOutLink = (
                <div className='log-out' onClick={() => this.logOut()}>Log out</div>
            )
        }
        return (
            <Menu>
                
                <ul className='navigation hitoverlay' style= {{display: this.state.showMenu}}>
                    <li><Link to={'/'} className='home'>Home</Link></li>
                    <li className='nav__menu-stores'><a onClick={this.toggleDropDown}>Stores</a>
                        {this.state.showStoresMenu && <StoresSubmenu />}
                    </li>
                    <li className='nav__menu-categories'><a onClick={this.toggleDropDown2}>Categories</a>
                        {this.state.showCategoriesMenu && <CategoriesSubmenu />}
                    </li>
                    <li>{favoriteLink}</li>
                    <li>{addDealLink}</li>
                    <li><Link to={'/registration'} className='registration'>Sign up</Link></li>  
                    <li><Link to={'/login'} className='login'>Login</Link></li>
                    <li>{logOutLink}</li>  
                </ul>
                {/* <div className ='hitbox' onClick={this.toggleDropDown3}>
                </div> */}
            </Menu>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(MainMenu));