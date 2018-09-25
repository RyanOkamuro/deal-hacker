import React from 'react';

import {Link} from 'react-router-dom';
import './stores.css';

export default class StoresSubmenu extends React.Component {
    render() {
        return (
            <ul className='nav_stores_submenu'>
                <li className='nav_stores_submenu-item'>
                    <Link to={'/amazon'} className='amazon-page'>Amazon</Link>
                </li>
                <li className='nav_stores_submenu-item'>
                    <Link to={'/bestbuy'} className='bestbuy-page'>Best Buy</Link>
                </li>
                <li className='nav_stores_submenu-item'>
                    <Link to={'/dell'} className='dell-page'>Dell</Link>
                </li>
                <li className='nav_stores_submenu-item'>
                    <Link to={'/macys'} className='macys-page'>Macy's</Link>
                </li>
                <li className='nav_stores_submenu-item'>
                    <Link to={'/walmart'} className='walmart-page'>Walmart</Link>
                </li>
            </ul>
        );
    }
}

