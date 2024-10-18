import React, { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false); // State to track if the navbar is open

    const toggleNavbar = () => {
        setIsOpen(!isOpen); // Toggle the open state
    };

    const closeMenu = () => {
        setIsOpen(false); // Close the navbar
    };

    return (
        <header className={`header ${isOpen ? 'active' : ''}`}>
            <div className="container">
                <a href="/" className="logo">Sirajun Nisha</a>
                
                {/* Toggle Button */}
                <button className={`nav-toggle-btn ${isOpen ? 'active' : ''}`} onClick={toggleNavbar}>
                    <div className="line line-1"></div>
                    <div className="line line-2"></div>
                    <div className="line line-3"></div>
                </button>

                {/* Navbar */}
                <nav className={`navbar ${isOpen ? 'open' : ''}`} data-navbar>
                    <ul className="navbar-list">
                        <li>
                            <a href="#hero" className="navbar-link" data-nav-link aria-label="Navigate to Home section" onClick={closeMenu}>Home</a>
                        </li>
                        <li>
                            <a href="#portfolio" className="navbar-link" data-nav-link aria-label="Navigate to Portfolio section" onClick={closeMenu}>Portfolio</a>
                        </li>
                        <li>
                            <a href="#skills" className="navbar-link" data-nav-link aria-label="Navigate to Skills section" onClick={closeMenu}>Skills</a>
                        </li>
                        <li>
                            <a href="#timeline" className="navbar-link" data-nav-link aria-label="Navigate to Timeline section" onClick={closeMenu}>Timeline</a>
                        </li>
                        <li>
                            <a href="#news" className="navbar-link" data-nav-link aria-label="Navigate to News section" onClick={closeMenu}>News</a>
                        </li>
                        <li>
                            <a href="#contact" className="navbar-link" data-nav-link aria-label="Navigate to Contact section" onClick={closeMenu}>Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
