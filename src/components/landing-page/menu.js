import React from 'react';

import StoresSubmenu from './stores';
import CategoriesSubmenu from './categories';
import {Link} from 'react-router-dom';
import {clearAuth} from '../../actions/auth';
import {clearAuthToken} from '../../local-storage';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

export class Menu extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    constructor(props) {
        super(props);
        this.state = {
            showStoresMenu: false,
            showCategoriesMenu: false,
            showMenu: false, 
        };
    }

    handleHover = () => {
        this.setState({ showStoresMenu: true });
    };

    handleLeave = () => {
        this.setState({ showStoresMenu: false });
    };

    toggleDropDown = () => {
        this.setState({ showStoresMenu: !this.state.showStoresMenu});
    }

    handleHover2 = () => {
        this.setState({ showCategoriesMenu: true });
    };

    handleLeave2 = () => {
        this.setState({ showCategoriesMenu: false });
    };

    toggleDropDown2 = () => {
        this.setState({ showCategoriesMenu: !this.state.showCategoriesMenu});
    }
    toggleDropDown3 = () => {
        this.setState({ showMenu: !this.state.showMenu});
    }

    render() {
        let addDealLink;
        let favoriteLink;
        let logOutLink;
        let logInLink =  (
            <Link to={'/login'} className='login' style= {{display: this.props.loggedIn ? 'none' : 'block'}}>Login</Link>
        )
        let signUpLink =  (
            <Link to={'/registration'} className='registration' style= {{display: this.props.loggedIn ? 'none' : 'block'}}>Sign up</Link>
        )
        if (this.props.loggedIn) {
            addDealLink = (
                <Link to={'/add-deal'} className='addDeal'>Add Deal</Link>
            )
            favoriteLink = (
                <Link to={'/favorites'} className='addDeal'>Favorites</Link>
            )
            logOutLink = (
                <div className='log-out' onClick={() => this.logOut()}>Log Out</div>
            )
        }
        return (
            <div>
                <p onClick={this.toggleDropDown3} className='mobileMenu hitoverlay'>Menu</p>
                <ul className='navigation hitoverlay' style= {{display: this.state.showMenu ? 'block' : 'none'}}>
                    <li><Link to={'/'} className='home'>Home</Link></li>
                    <li className='nav__menu-stores' onMouseLeave={this.handleLeave}><a onClick={this.toggleDropDown} onMouseEnter={this.handleHover}>Stores</a>
                        {this.state.showStoresMenu && <StoresSubmenu />}
                    </li>
                    <li className='nav__menu-categories' onMouseLeave={this.handleLeave2}><a onClick={this.toggleDropDown2} onMouseEnter={this.handleHover2}>Categories</a>
                        {this.state.showCategoriesMenu && <CategoriesSubmenu />}
                    </li>
                    <li>{favoriteLink}</li>
                    <li>{addDealLink}</li>
                    <li>{signUpLink}</li>
                    <li>{logInLink}</li>  
                    <li>{logOutLink}</li>  
                </ul>
                {this.state.showMenu && <div className ='hitbox' onClick={this.toggleDropDown3}></div>} 
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(Menu));