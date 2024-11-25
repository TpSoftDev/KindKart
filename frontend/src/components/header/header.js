import React from 'react';
import './header.css';
import logo from './images/logo.png';

const Header = () => {
          return (
              <header className="header">
                  <img src={logo} alt="Kindcart Logo" className="logo" />
                  <nav className="nav">
                      <a href="#about">About Us</a>
                      <a href="#vision">Our Vision</a>
                      <a href="#crew">The Kind Crew</a>
                  </nav>
              </header>
          );
      };

export default Header;
