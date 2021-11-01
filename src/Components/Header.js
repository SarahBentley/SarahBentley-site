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
                        <h4 className="subtitle">MIT Class of 2024</h4>
                        <h4 className = "subtitle">Pursuing BS in mathematics with computer science</h4>
                        <h4 className="subtitle">Interests: software engineering and web development</h4>
                    </div>

                    {/* <div className="img-container">
                        <img className="img" src='profile_pic.jpg' />
                    </div> */}
                </div>
            </div>
        )
    }
};

export default Header;

