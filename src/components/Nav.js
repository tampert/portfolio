import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom';

const Nav = () => {
    

    const toggle = () =>{
        let navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active')
    }
    const navStyle = {
        color: '#efefef'
    }
    return (
        <nav className="nav-bar">
            <div className="brand-title">
                <Link style={navStyle} to='/'>Dirk Soentjens</Link>
            </div>
            <a href="/#" className="toggle-button" onClick={toggle}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
            <div className="nav-links">
                <ul>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    <li>
                        <Link to='/dota'>video games</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;