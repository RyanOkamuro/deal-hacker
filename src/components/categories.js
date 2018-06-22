import React from 'react';
import {Link} from 'react-router-dom';

import './categories.css';

export default class CategoriesSubmenu extends React.Component {
    render() {
        return (
            <ul className="nav_categories_submenu">
                <li className="nav_categories_submenu-item">
                    <Link to={"/electronics"} className="electronics-page">Electronics</Link>
                </li>
                <li className="nav_categories_submenu-item">
                    <Link to={"/homeneeds"} className="homeneeds-page">Home Needs</Link>
                </li>
                <li className="nav_categories_submenu-item">
                    <Link to={"/jewlery"} className="jewlery-page">Jewlery</Link>
                </li>
            </ul>
        );
    }
}

