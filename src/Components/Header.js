import React, { Component} from "react";
import '../utilities.css'
import "./Header.css";


class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="header">
                    <div className="name">
                        <h1 className="title">Sarah Bentley</h1>
                    </div>
                    <div className="description">
                        <h4 className="subtitle"><b>MIT Class of 2024</b></h4>
                        <h4 className = "subtitle">Pursuing BS in double major of math and AI and decision-making</h4>
                        <h4 className="subtitle">Interests: optimization, combinatorics, statistics, modeling and simulation, and data science</h4>
                        <h3 className="subtitle sidenote">I coded this site as a React App with routing and custom CSS styling. Check out the GitHub repo <a href="https://github.com/SarahBentley/sarahbentley">here.</a></h3>
                    </div>
                </div>
            </div>
        )
    }
};

export default Header;

