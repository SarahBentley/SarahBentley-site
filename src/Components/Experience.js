import React, { Component} from "react";
import '../utilities.css'
import "./Experience.css";


class Experience extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="ExperienceSection">
                    <div className="left">
                        <hr className="line" className="Blue"></hr>
                        <h2>Experience</h2>
                        <hr className="line"className="Blue"></hr>
                    </div>
                    <div className="right">
                        <h4 className="experience-title">SpaceNet Engineer</h4>
                        <h4 className="experience-subtitle">MIT Dept. of Aeronautics and Astronautics</h4>
                        <h4 className="experience-subtitle">May 2021 - Present</h4>
                            <ul className="experience-listings">
                                <p><li>Reconstruct <a href="http://spacenet.mit.edu/index.php">SpaceNet</a>, a space logistics interface which enables the simulation of space exploration campaigns.</li></p>
                                <p><li>Collaborate closely with a team on building the app from the ground up, developing optimal database models, efficient backend simulation functions, API routes and a user-friendly frontend.</li></p>
                                <p><li>Utilize tools such as Bootstrap, JQuery, HTML, Javascript and external libraries to build forms, serialize user inputs to match schemas, and send and retrieve data through the backend for simulation analysis purposes.</li></p>
                                <p><li>Use HTML Canvas to design space travel visualizations and Chart.js to plot graphs displaying abstract events.</li></p>
                                <p><li>Presented the project to groups at NASA and contributed to publication for the AIAA ASCEND conference.</li></p>
                            </ul>

                        <h4 className="experience-title">UX Engineer for Computational Interface</h4>
                        <h4 className="experience-subtitle">MIT Media Lab</h4>
                        <h4 className="experience-subtitle">Feb. - May 2021</h4>
                            <ul className="experience-listings">
                                <p><li>Responsible for the full development of a Wordpress site as well as the maintenance of an interactive Javascript/React web app for an MIT Media Lab project called KnitheWorld, which teaches students to code by designing knits.</li></p>
                                <p><li>Coded and tested various software architectures on Wordpress. Guided content development.</li></p>
                            </ul>

                        <h4 className="experience-title">COVID-19 Study Undergraduate Research Assistant</h4>
                        <h4 className="experience-subtitle">MIT Sloan</h4>
                        <h4 className="experience-subtitle">Jan. 2021</h4>
                            <ul className="experience-listings">
                                <p><li>Worked closely with the research team to gather and analyze COVID-19 data from state websites and data dashboards to assess the severity of reporting delays.</li></p>
                                <p><li>Utilized tools such as Excel to organize the data from different states into panel data.</li></p>
                            </ul>

                        <h4 className="experience-title">Thrifti Web Development Engineer</h4>
                        <h4 className="experience-subtitle">MIT Web Lab Course</h4>
                        <h4 className="experience-subtitle">Jan. 2021</h4>
                            <ul className="experience-listings">
                                <p><li>Built a React application called Thrifti, a platform for finding, rating and reviewing thrift stores.</li></p>
                                <p><li>Engineered the site from a minimal skeleton, implementing a login feature, multiple pages and specialized profiles.</li></p>
                                <p><li>Utilized MongoDB to store data and leveraged external libraries such as Google Maps to display store locations.</li></p>
                            </ul>

                        <h4 className="experience-title">Research Intern</h4>
                        <h4 className="experience-subtitle">USC Dept. of Preventative Medicine and RAND Corporation</h4>
                        <h4 className="experience-subtitle">Jul. - Sept. 2019</h4>
                            <ul className="experience-listings">
                                <p><li>Served as research intern for a buprenorphine initiation study conducted by a group of researchers associated with USC and RAND. Designed spreadsheet for recording preliminary interview responses. </li></p>
                                <p><li>Wrote a preliminary draft of the protocol for study’s grant application.</li></p>
                            </ul>

                    </div>
                </div>
                <div className="ExperienceSection">
                    <div className="left">
                        <hr className="Blue"></hr>
                        <h2 className="title">Skills</h2>
                        <hr className="Blue"></hr>
                    </div>
                    <div className="right">
                        <ul>
                            <li>                        
                                <p className="experience-subtitle">Python, JavaScript, HTML5, CSS, React, JQuery, MongoDB and Git.</p>
                            </li>
                            <li>                        
                                <p className="experience-subtitle">Experience building Wordpress site.</p>
                            </li>
                            <li>                        
                                <p className="experience-subtitle">Proficiency in mathematics.</p>
                            </li>
                            <li>                        
                                <p className="experience-subtitle">Understanding of research methodologies.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
};

export default Experience;

