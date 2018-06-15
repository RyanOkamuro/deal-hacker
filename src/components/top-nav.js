import React from 'react';

import './top-nav.css';

export default function TopNav(props) {
    return (
        <nav> 
            <ul className="navigation">
                <li><a href="#Home" className="home">Home</a></li>
                <li><a href="#Stores" className="stores">Stores</a></li>
                <li><a href="#Categories" className="categories">Categories</a></li>
            </ul>
            <form className="sale-search-form">
                <fieldset name="search-for-sale">
                    <legend>Search for sale</legend>
                    <label for="js-sale-item" className="sale-item">Search for sale item</label>
                    <input placeholder="Dyson V7 Motorhead Cord-Free Vacuum" type="text" name="js-sale-item" id="js-sale-item" required/>
                    <button type="submit" className="js-search-sale-items">Search</button>
                </fieldset>
            </form>
        </nav>
    )
}

