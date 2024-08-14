import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ isOpen, closeMenu }) => (
    <nav className={`portfolio-nav ${isOpen ? 'open' : ''}`}>
        <ul>
            <li><Link to="/home" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/journey" onClick={closeMenu}>My Journey</Link></li>
            <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
            {/* <li><Link to="/photos" onClick={closeMenu}>Photos</Link></li> */}
            {/* <li><Link to="/cycling" onClick={closeMenu}>Cycling</Link></li> */}
        </ul>
    </nav>
);

export default NavBar;
