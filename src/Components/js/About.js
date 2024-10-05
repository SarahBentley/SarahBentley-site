import '../../utilities.css'
import "../css/About.css";
import { Link } from "react-router-dom";


const About = () => {

        return (
            <>
                {/* <hr width ="100px"></hr>
                <h2 className="u-textCenter">About Me</h2>
                <hr width ="100px"></hr> */}
                <div className="AboutSection padded-cont">
                    <div className="half-flex">
                        <img className="profile-img" src="profile_pic.jpg"/>
                    </div>
                    <div className="description">
                        <h2 className="u-textCenter">Hello!</h2>
                        <p>
I am a Master's student at Massachusetts Institute of Technology conducting research in artificial intelligence and machine learning from a mathematical perspective. In June of 2024, I received my Bachelor's degree from MIT with a double major in math and AI and decision-making. I especially enjoy exploring the intersection of machine learning, combinatorics, and linear algebra with the theory of computation. I'm currently using tools in theory of computation to study the reasoning capabilities of large language models.</p>
                        <p>
                            Check out my <Link to="/experience">experience</Link> page to learn about my research and internships.</p>
                    </div>
                </div>
                {/* <hr width="200px" className="Blue"></hr>
                <h2 className="u-textCenter">Activities</h2>
                <hr width="200px" className="Blue"></hr>

                <div className="AboutSection padded-cont">
                    <div className="half-flex">
                        <img alt='' className="u-textCenter xc-img" src="running_photo.JPG"></img>
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
                        <img alt='' className="codeit-img" src="code_it.png"></img>
                    </div>
                    <div className="half-flex">
                        <h4 className="u-bold u-textCenter">MIT CodeIt</h4>
                        <p>
                            I'm also a mentor for CodeIt, a program which teaches middle school-age female and nonbinary students how to code.
                        </p>
                    </div>
                </div> */}
                <div className="AboutSection padded-cont blue-cont">
                    <div className="half-flex">
                        <hr width="200px" className="Blue"></hr>
                        <h2 className="u-textCenter">Interests</h2>
                        <hr width="200px" className="Blue"></hr>
                        <ul>
                            <li><p>Surfing - I've surfed for nearly all my life!</p></li>
                            <li><p>Hiking - I am a big fan of long hikes and have dreams of many backpacking trips.</p></li>
                            <li><p>The science of athletics - I'm fascinated by the human body and how it balances the stress-recovery cycle of being an athlete.</p></li>
                            <li><p>Math - While a lot of the work I've done is CS-focused, few things provide me more intellectual stimulation and sense of accomplishment than a good math problem.</p></li>
                            <li><p>Teaching - I have worked as a teaching assistant for many courses at MIT and I have absolutely loved digging deeper into each subject and explaining them to students through new viewpoints.</p></li>
                            <li><p>Crossfit - I'm a fan of Crossfit, both as a sport and a path to living an overall healthy, fit lifestyle.</p></li>

                        </ul>          
                    </div>
                    <div className="half-flex">
                        <img alt='' className="surfing-img" src="hiking.jpeg"></img>
                        <img alt='' className="surfing-img" src="surfing.jpeg"></img>
                    </div>
                </div>
            </>
        )
}

export default About

