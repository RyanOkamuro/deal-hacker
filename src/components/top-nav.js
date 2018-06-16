import React from 'react';
import {Link} from "react-router-dom";

import './top-nav.css';

export default class TopNav extends React.Component {
    render() {
        return (
            <nav> 
                <ul className="navigation">
                    <li><Link to={"/"} className="home">Home</Link></li>
                    <li><a href="#Stores" className="stores">Stores</a></li>
                    <li><a href="#Categories" className="categories">Categories</a></li>
                    <li>
                        <form className="sale-search-form">
                            <fieldset name="search-for-sale">
                                <legend>Search for sale</legend>
                                <label htmlFor="js-sale-item" className="sale-item">Search for sale item</label>
                                <input placeholder="Dyson V7 Motorhead Cord-Free Vacuum" type="text" name="js-sale-item" id="js-sale-item" required/>
                                <button type="submit" className="js-search-sale-items">Search</button>
                            </fieldset>
                        </form>
                    </li>
                    <li><Link to={"/pages/login"} className="login">Login</Link></li>
                    <li><Link to={"/pages/signup"} className="signup">Sign up</Link></li>    
                </ul>
            </nav>
        );
    }
}

