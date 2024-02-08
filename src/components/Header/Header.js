import React, { useState, useEffect } from 'react';
import './Header.css';
import NavBar from '../NavBar/NavBar.js';
import resumePDF from '../../assets/files/Vishwas_Resume.pdf';

const Header = () => {
    const [isNavOpen, setNavOpen] = useState(false);

    useEffect(() => {
        if (isNavOpen) {
            setTimeout(() => {
                setNavOpen(true);
            }, 0);
        }
    }, [isNavOpen]);

    const toggleNav = () => {
        setNavOpen(!isNavOpen);
    };

    const closeNav = () => {
        setNavOpen(false);
    };

    return (
        <header className="portfolio-header">
            <div className="header-content">
                <div className="mobile-menu-toggle" onClick={toggleNav}>
                    ☰
                </div>
                <NavBar isOpen={isNavOpen} closeMenu={closeNav}/>
                <a href={resumePDF} download="Vishwas_Resume.pdf" className="resume-link">↓ Resume</a>
            </div>
        </header>
    );
};

export default Header;
