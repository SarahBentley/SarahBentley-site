import { React, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../utilities.css';
import "../css/NavBar.css";

const NavBar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="NavBar-container">
            <div className="wrap">
                <li className="NavBar-logo old">
                    <NavLink style={{ textDecoration: 'none' }} className="NavBar-link" to="/">SB</NavLink>
                </li>
                <li className="NavBar-logo new">
                    <NavLink style={{ textDecoration: 'none' }} className="NavBar-link" to="/">SARAH BENTLEY</NavLink>
                </li>
                <button 
                    className="hamburger-menu" 
                    onClick={toggleMenu} 
                    aria-label="Toggle menu">
                    <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
                    <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
                    <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
                </button>
                <div className={`NavBar-linkContainer ${isMenuOpen ? 'show' : ''}`}>
                    <li><h4>
                        <NavLink style={{ textDecoration: 'none' }} className="NavBar-link" activeClassName="NavBar-link-active" to="/about">About me</NavLink>
                    </h4></li>
                    <li><h4>
                        <NavLink style={{ textDecoration: 'none' }} className="NavBar-link" activeClassName="NavBar-link-active" to="/experience">Experience</NavLink>
                    </h4></li>
                    <li><h4>
                        <NavLink style={{ textDecoration: 'none' }} className="NavBar-link" activeClassName="NavBar-link-active" to="/math_cs">Math&CS</NavLink>
                    </h4></li>
                    <li><h4>
                        <NavLink style={{ textDecoration: 'none' }} className="NavBar-link" activeClassName="NavBar-link-active" to="/lifestyle">Lifestyle</NavLink>
                    </h4></li>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
