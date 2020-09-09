import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom';

const Nav = () => {
    const navStyle = {
        color: '#efefef'
    }
    return (
        <nav>
            <Link style={navStyle} to='/'>
            <h3>Dirk Soentjens</h3>
            </Link>
            <ul className="nav-links">
                <Link to='/about'>
                    <li>About</li>
                </Link>
                <Link to='/contact'>
                    <li>Contact</li>
                </Link>
                <Link to='/dota'>
                    <li>video games</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;