import React, { Component} from "react";
import '../utilities.css'
import "./Footer.css";


class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer>
                <div className="Footer-linkContainer">
                    <h3>
                        sbentley@mit.edu
                    </h3>
                    <a href="https://www.linkedin.com/in/sarah-bentley-2722a51ab/"><img className="Footer-img" src="linkedin_logo.png"></img></a>
                </div>
            </footer>
        )
    }
};

export default Footer;

