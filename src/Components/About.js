import React, { Component} from "react";
import '../utilities.css'
import "./About.css";
import { Link } from "react-router-dom";


class About extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                {/* <hr width ="100px"></hr>
                <h2 className="u-textCenter">About Me</h2>
                <hr width ="100px"></hr> */}
                <div className="AboutSection padded-cont">
                    <div className="img-container">
                        <img className="profile-img" src="profile_pic.jpg"/>
                    </div>
                    <div className="description">
                        <h2 className="u-textCenter">Hello!</h2>
                        <p>
I am a sophomore at Massachusetts Institute of Technology from Los Angeles, California majoring in math with computer science. At MIT, I am using my studies to combine analytical and creative approaches to problem-solving. In my programming courses, I have learned not only the building blocks of Python but also best style practices, program parsimony, and how to write clean, comprehensible code. Through involved coding labs such as the development of an in-depth LISP Interpreter, I have a deep understanding of computer environments and learned to value efficiency over pure functionality.</p>
                        <p>
                            Throughout my time at MIT, I've also grown especially interested in web development. Check out my <Link to="/experience">experience</Link> page to learn about all the projects I have worked on.</p>
                    </div>
                </div>
                <hr width="200px" className="Blue"></hr>
                <h2 className="u-textCenter">Activities</h2>
                <hr width="200px" className="Blue"></hr>

                <div className="AboutSection padded-cont">
                    <div className="img-container">
                        <img className="xc-img" src="running_photo.JPG"></img>
                    </div>
                    <div className="half-flex">
                        <h4 className="u-bold u-textCenter">MIT Cross Country and Track</h4>
                        <p>
                            Outside of school, I dedicate most of my time to the cross country and track and field teams at MIT, for which I am a recruited athlete.</p>
                        <p>
                            Take a look at my <a href="https://mit.prestosports.com/sports/w-xc/2020-21/bios/bentley_sarah_2uy6?view=bio">bio</a> to learn more about my accomplishments and the <a href="https://mit.prestosports.com/sports/w-xc/index">team page</a> to stay up to date on our performances.</p>
                    </div>
                </div>
                <div className="AboutSection padded-cont">
                    <div className="half-flex">
                        <h4 className="u-bold u-textCenter">MIT CodeIt</h4>
                        <img className="codeit-img" src="code_it.png"></img>
                        <p>
                            I'm also a mentor for CodeIt, a program which teaches middle school-age female and nonbinary students how to code.
                        </p>
                    </div>
                    <div className="half-flex">
                        <h4 className="u-bold u-textCenter">Since Parkland</h4>
                        <a href="https://sinceparkland.org/"><img className="sinceparkland-img" src="since_parkland_3.png"></img></a>
                        <p>
                            In high school, I worked on a project called <a href="https://sinceparkland.org/">Since Parkland</a>, in which I worked with a team of students to write a total of 1,200 obituaries for the teens who had died to gun violence since the shooting at Parkland.
                        </p>
                    </div>
                </div>
                <div className="AboutSection padded-cont blue-cont">
                    <div className="half-flex">
                        <hr width="200px" className="Blue"></hr>
                        <h2 className="u-textCenter">Other Interests</h2>
                        <hr width="200px" className="Blue"></hr>
                        <ul>
                            <li><p>Surfing - I've surfed for nearly all my life!</p></li>
                            <li><p>Food - I enjoy healthy food and love to cook up simple yet nutritious meals whenever I get the chance.</p></li>
                            <li><p>Athleticism - I'm fascinated by the human body and how it balances the stress-recovery cycle of being an athlete.</p></li>
                            <li><p>Math - While a lot of the work I've done is CS-focused, few things provide me more intellectual stimulation and sense of accomplishment than a good math problem.</p></li>
                            <li><p>Crossfit - I'm a fan of Crossfit, both as a sport and a path to living an overall healthy, fit lifestyle.</p></li>

                        </ul>          
                    </div>
                    <div className="half-flex">
                        <img className="surfing-img" src="surfing.jpeg"></img>
                    </div>
                </div>
            </>
        )
    }
};

export default About;

