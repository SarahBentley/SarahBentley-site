import React, { Component} from "react";
import '../utilities.css'
import "./Experience.css";


class Work extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="ExperienceSection">
                    <div>
                        <hr width="200px" className="Blue"></hr>
                        <h2 className="title left">Experience</h2>
                        <hr width ="200px"className="Blue"></hr>
                    </div>
                    <div className="right">
                        <h4>Description goes here</h4>
                    </div>
                </div>
            </>
        )
    }
};

export default Work;

