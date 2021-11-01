import React, { Component} from "react";
import '../utilities.css'
import "./NavBar.css";
import {
    NavLink
  } from "react-router-dom";


class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="NavBar-container">
                <div className="wrap">
                    <li className="NavBar-logo old">
                        <NavLink style={{ textDecoration: 'none' }} className = "NavBar-link" to="/">SB</NavLink>
                    </li>
                    <li className="NavBar-logo new">
                        <NavLink style={{ textDecoration: 'none' }} className = "NavBar-link" to="/">SARAH BENTLEY</NavLink>
                    </li>
                    <div className="NavBar-linkContainer">
                        <li><h4>
                            <NavLink style={{ textDecoration: 'none' }} className = "NavBar-link" activeClassName="NavBar-link-active" to="/about">About me</NavLink>
                        </h4></li>
                        <li><h4>
                            <NavLink style={{ textDecoration: 'none' }} className = "NavBar-link" activeClassName="NavBar-link-active" to="/experience">Experience</NavLink>
                        </h4></li>
                        {/* <li><h4>
                            <NavLink style={{ textDecoration: 'none' }} className = "NavBar-link" activeClassName="NavBar-link-active" to="/work">Work</NavLink>
                        </h4></li> */}
                    </div>
                </div>
            </nav>
        )
    }
};

export default NavBar;

