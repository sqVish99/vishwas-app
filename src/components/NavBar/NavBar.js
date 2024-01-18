import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ isOpen, closeMenu }) => (
    <nav className={`portfolio-nav ${isOpen ? 'open' : ''}`}>
        <ul>
            <li><Link to="/home" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/journey" onClick={closeMenu}>My Journey</Link></li>
            <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
        </ul>
    </nav>
);

export default NavBar;
