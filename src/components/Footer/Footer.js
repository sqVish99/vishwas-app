import React from 'react';
import './Footer.css';
import email from '../../assets/images/email.svg';
import linkedin from '../../assets/images/linkedin.svg';
import github from '../../assets/images/github.svg';

const Footer = () => {
    return (
        <div className="portfolio-footer">
            <div className="footer-content">
                <a href="mailto:vmharish@asu.edu"><img className="footer-logo" src={email} alt='email' /></a>
                <a href="https://www.linkedin.com/in/vishwas-m-h/" target="_blank" rel="noopener noreferrer"><img src={linkedin} className="footer-logo" alt='linkedin' /></a>
                <a className="dark-icon" href="https://github.com/sqVish99" target="_blank" rel="noopener noreferrer"><img src={github} className="footer-logo" alt='github' /></a>
                
            </div>
        </div>
    );
};

export default Footer;
