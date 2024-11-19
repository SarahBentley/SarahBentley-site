import '../../utilities.css'
import "../css/Experience.css";

const Experience = () => {
        return (
            <>
                
                <div className="ExperienceSection">
                    <div className="left">
                        <hr className="line Blue"></hr>
                        <h2>Experience</h2>
                        <hr className="line Blue"></hr>
                    </div>
                    <div className="right">
                    <h4 className="experience-title">Graduate Researcher</h4>
                        <h4 className="experience-subtitle">MIT, Laboratory for Information & Decision Systems</h4>
                        <h4 className="experience-subtitle">Sept. 2024 - Present</h4>
                            <ul className="experience-listings">
                            <p><li>Use empirical and theoretical methods to study underlying ‘world models’ of high-performing deep models.</li></p>
                            <p><li>Design methods using AI to distill human reasoning into executable programs.</li></p>
                            </ul>

                        <h4 className="experience-title">Theory of Machine Learning Research Intern</h4>
                        <h4 className="experience-subtitle">EPFL, Lausanne Switzerland</h4>
                        <h4 className="experience-subtitle">Jun. - Aug. 2024</h4>
                            <ul className="experience-listings">
                            <p><li>Study transformers' reasoning capacity through simulation of deterministic finite automata and hidden Markov models.</li></p>
                            <p><li>Examine the theoretical expressiveness of transformers with architectural changes such as localized attention, relative positional encoding, scratchpad training, adjusted teacher-forcing, and recency bias that may be suitable for reasoning.</li></p>
                            <p><li>Build a transformer from scratch and run experiments on DFAs and HMMs using such architectural adjustments.</li></p>
                            </ul>
                        <h4 className="experience-title">Mission Design and Navigation Intern</h4>
                        <h4 className="experience-subtitle">Blue Origin</h4>
                        <h4 className="experience-subtitle">Jun. - Aug. 2023</h4>
                            <ul className="experience-listings">
                                <p><li>Developed a flight critical data access service used to store and determine the trajectory of a vehicle.</li></p>
                                <p><li>Designed SQL database schemas to optimize understandability, speed, and cost-effectiveness.</li></p>
                                <p><li>Leveraged key backend frameworks such as Docker, FastAPI, Pydantic, and more.</li></p>
                                <p><li>Conducted a series of trade studies on the optimal software architecture to suit my team's needs.</li></p>
                                <p><li>Focused on code quality, readability, and refactorization to ease the maintenance of my service after the end of my internship.</li></p>
                                <p><li>Developed skills for communicating between engineers in different fields, such as aerospace, mechanical, and software engineering.</li></p>
                            </ul>

                        <h4 className="experience-title">Software Engineer Intern</h4>
                        <h4 className="experience-subtitle">Blue Origin</h4>
                        <h4 className="experience-subtitle">Jun. - Aug. 2022</h4>
                            <ul className="experience-listings">
                                <p><li>Rebuilt and optimized a simulation software called <a href="http://spacenet.mit.edu/index.php">SpaceNet</a> to inform key decisions — such as resupply flight cadence, feasibility, and preparation for contingencies — of the logistics team for the Orbital Reef space station.</li></p>
                                <p><li>Designed in-depth Pydantic schemas to define the software’s input to a set of consecutive Python algorithms.</li></p>
                                <p><li>Implemented a first-fit packing algorithm to represent putting items needed on the space station into containers.</li></p>
                                <p><li>Leveraged Gurobi, a mathematical programming software, to develop a manifest algorithm that assigns items to resupply flights to satisfy needs and optimize remaining usable space subject to capacity constraints.</li></p>
                                <p><li>Wrapped algorithm in a full-stack web interface that generates graphs evaluating the manifest’s effectiveness.</li></p>
                            </ul>
                    
                        <h4 className="experience-title">Modeling and Simulation Researcher</h4>
                        <h4 className="experience-subtitle">MIT Dept. of Aeronautics and Astronautics, Blue Origin </h4>
                        <h4 className="experience-subtitle">Jun. 2021 - Present</h4>
                            <ul className="experience-listings">
                                <p><li>Continuous development and use of SpaceNet with both Blue Origin and a team of MIT graduate students, starting with an initial effort to transfer the old Java interface to the cloud in summer of 2021.</li></p>
                                <p><li>Build the app from the ground up, coding schemas, simulation functions, API routes, and space travel visualizations.</li></p>
                                <p><li>Use SpaceNet’s functionalities to implement a Taguchi array modeling framework, observing the effects of tweaking key variables and providing concrete metrics on logistics requirements for Orbital Reef.</li></p>
                                <p><li>Working towards implementing a Monte Carlo simulation for in-depth analysis of feasibility and contingencies.</li></p>
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
                        <h2 className="title">Teaching</h2>
                        <hr className="Blue"></hr>
                    </div>
                    <div className="right">
                        <h4 className="experience-title">Theory of Computation (18.404) Graduate TA</h4>
                        <h4 className="experience-subtitle">MIT</h4>
                        <h4 className="experience-subtitle">Feb. - May. 2024</h4>
                            <ul className="experience-listings">
                                <p><li>Duties: develop material for and teach weekly recitations, hold office hours, hold review sessions, and help with course administration tasks.</li></p>
                            </ul>

                        <h4 className="experience-title">Probability and Random Variables (18.600) Undergraduate TA</h4>
                        <h4 className="experience-subtitle">MIT</h4>
                        <h4 className="experience-subtitle">Feb. - May. 2024</h4>
                            <ul className="experience-listings">
                                <p><li>Duties: develop material for and teach weekly recitations, hold office hours, hold review sessions, and help with course administration tasks.</li></p>
                            </ul>

                        <h4 className="experience-title">Real Analysis (18.100A) Undergraduate Assistant</h4>
                        <h4 className="experience-subtitle">MIT</h4>
                        <h4 className="experience-subtitle">Aug. - Dec. 2023</h4>
                            <ul className="experience-listings">
                                <p><li>Duties: hold weekly office hours and review sessions.</li></p>
                            </ul>

                        <h4 className="experience-title">Linear Algebra (18.06) Undergraduate Assistant</h4>
                        <h4 className="experience-subtitle">MIT</h4>
                        <h4 className="experience-subtitle">Aug. - Dec. 2023</h4>
                            <ul className="experience-listings">
                                <p><li>Duties: hold weekly office hours and review sessions.</li></p>
                            </ul>
                    </div>
                </div>
                <div className="ExperienceSection">
                    <div className="left">
                        <hr className="Blue"></hr>
                        <h2 className="title">Courses</h2>
                        <hr className="Blue"></hr>
                    </div>
                    <div className="right">
                 
                        <p className="experience-subtitle"> Statistical Learning Theory, Deep Learning, Algorithms, ML, Computer Vision, Real Analysis, Combinatorics, Linear Algebra, Group Theory, Probability, Combinatorial Optimization, Statistical Data Analysis, Optimization Methods, and AI.</p>

                    </div>
                </div>
                <div className="ExperienceSection">
                    <div className="left">
                        <hr className="Blue"></hr>
                        <h2 className="title">Skills</h2>
                        <hr className="Blue"></hr>
                    </div>
                    <div className="right">
                 
                        <p className="experience-subtitle"> Python, Pytorch, Pandas, Tensorflow, Docker, Pydantic, Gurobi, Julia, Javascript, React, SQL, MongoDB, and Git.</p>

                    </div>
                </div>
                <div className="ExperienceSection">
                    <div className="left">
                        <hr className="Blue"></hr>
                        <h2 className="title">Interests</h2>
                        <hr className="Blue"></hr>
                    </div>
                    <div className="right">
                      
                        <p className="experience-subtitle"> AI alignment, theory of computation, linear algebra, machine learning, statistics, music composition, hiking, guitar, cooking, and surfing.</p>

                    </div>
                </div>
            </>
        )
}

export default Experience
