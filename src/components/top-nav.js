import React from 'react';

import './top-nav.css';

export default class TopNav extends React.Component {
    render() {
        return (
            <nav> 
                <ul className="navigation">
                    <li><a href="#Home" className="home">Home</a></li>
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
                    <li><a href="#Login" className="login">Login</a></li>
                    <li><a href="#Sign up" className="signUp">Sign up</a></li>
                </ul>
            </nav>
        );
    }
}

