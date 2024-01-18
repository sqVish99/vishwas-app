import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
   <nav className="portfolio-nav">
      <ul>
         <li><Link to="/home">Home</Link></li>
         <li><Link to="/journey">My Journey</Link></li>
         <li><Link to="/projects">Projects</Link></li>
      </ul>
   </nav>
);

export default NavBar;
