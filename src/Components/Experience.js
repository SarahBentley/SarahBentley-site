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
                        <hr className="line Blue"></hr>
                        <h2>Experience</h2>
                        <hr className="line Blue"></hr>
                    </div>
                    <div className="right">
                        <h4 className="experience-title">Cloud Software Engineer Intern</h4>
                        <h4 className="experience-subtitle">Blue Origin</h4>
                        <h4 className="experience-subtitle">Jun. - Aug. 2022</h4>
                            <ul className="experience-listings">
                                <p><li>Intern at Blue Origin for the summer of 2022 working on a modeling and simulation software.</li></p>
                            </ul>
                    
                        <h4 className="experience-title">Cloud Software Engineer</h4>
                        <h4 className="experience-subtitle">MIT Dept. of Aeronautics and Astronautics</h4>
                        <h4 className="experience-subtitle">May 2021 - Present</h4>
                            <ul className="experience-listings">
                                <p><li>Combine analytics and frontend web development to redesign <a href="http://spacenet.mit.edu/index.php">SpaceNet</a>, a space logistics simulation interface.</li></p>
                                <p><li>Collaborate closely with a team on building the app from the ground up, developing optimal database models, efficient backend simulation functions, API routes and a user-friendly frontend.</li></p>
                                <p><li>Leverage Bootstrap, JQuery, HTML, Javascript and external libraries to build forms, serialize user inputs to match schemas, and send and retrieve data through the backend for simulation analysis purposes.</li></p>
                                <p><li>Create and plot graphs using HTML Canvas to design space travel visualizations for abstract events.</li></p>
                                <p><li>Presented the project to groups at NASA and contributed to <a href="https://arc.aiaa.org/doi/abs/10.2514/6.2021-4068">publication</a> for the AIAA ASCEND conference.</li></p>
                            </ul>

                        <h4 className="experience-title">Web Development Engineer</h4>
                        <h4 className="experience-subtitle">MIT Code for Good course</h4>
                        <h4 className="experience-subtitle">Jan. 2022</h4>
                            <ul className="experience-listings">
                                <p><li>Collaborated with a team of students to build a website for a Turkish nonprofit called We Need to Talk.</li></p>
                                <p><li>Built wireframes, tested software architectures and engineered a user-friendly Wordpress volunteer sign-up page and corresponding data organization system to help the nonprofit optimally leverage volunteer potential.</li></p>
                            </ul>

                        <h4 className="experience-title">Frontend Engineer for Computational Interface</h4>
                        <h4 className="experience-subtitle">MIT Media Lab</h4>
                        <h4 className="experience-subtitle">Feb. - May 2021</h4>
                            <ul className="experience-listings">
                                <p><li>Developed and became sole end to end owner of a Wordpress site for an MIT Media Lab project called KnitheWorld, which teaches students to code by designing knits.</li></p>
                                <p><li>Experimented with various software architectures on Wordpress, learning how to make wireframes, leverage plugins and optimize the user testing process. Guided content development.</li></p>
                            </ul>

                        <h4 className="experience-title">Undergraduate Research Assistant</h4>
                        <h4 className="experience-subtitle">MIT Sloan</h4>
                        <h4 className="experience-subtitle">Jan. 2021</h4>
                            <ul className="experience-listings">
                                <p><li>Collaborated with a research team to gather and analyze COVID-19 data from state websites and data dashboards to assess the severity of reporting delays.</li></p>
                                <p><li>Organized and standardized data from different states using tools such as Excel for comparison across categories.</li></p>
                            </ul>

                        <h4 className="experience-title">Web Development Engineer</h4>
                        <h4 className="experience-subtitle">MIT Web Lab Course</h4>
                        <h4 className="experience-subtitle">Jan. 2021</h4>
                            <ul className="experience-listings">
                                <p><li>Built a React application called Thrifti, a platform for finding, rating and reviewing thrift stores.</li></p>
                                <p><li>Engineered the site from a minimal skeleton, implementing a login feature, multiple pages and specialized profiles.</li></p>
                                <p><li>Learned MongoDB capabilities to store data and leveraged libraries such as Google Maps to display store locations.</li></p>
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
                                <p className="experience-subtitle">Python, JavaScript, Pydantic, HTML5, CSS, React, JQuery, MongoDB, Wordpress, and Git</p>
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

