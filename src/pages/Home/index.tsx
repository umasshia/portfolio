import "./index.css";
import { Link } from "react-router-dom";
import TypewriterComponent from "typewriter-effect";

const Home = () => {
    const about = "I’ve always had a knack for solving problems, like your doctor, your plumber, electrician, mechanic, and especially your accountant. They are all problem solvers at heart and they are some of the ones we most need to know, appreciate, and celebrate. I want to join the ranks of those problem solvers we celebrate in today’s fast-paced, digital-driven world because the process of finding solutions is where I learn and grow the most and is why I have, and am, pursuing a career in computer science. From computer languages to databases, from cloud services to frameworks, and everything in-between, my curiosity motivates and drives me to always listen, learn, and be open to, not only new challenges but also new people and places as well. To find out more about me, like why a kid from Georgia (the country, not the state), left home for college, got sent back home from college (Covid-19 pandemic), attended classes online despite the 9-hour time difference, and decided to stay in the U.S. to live and work is what I want to do with my life, give me a call, take a look at my website or connect with me on LinkedIn and I will settle the curiousness I hope you have about myself and my work."

    return (
        <div className="home">
            <div className="header">
                <div className="name">Giorgi Samushia</div>
                <div className="title">Creative Technology Lead at Democracy at Work</div> 
                <div className="about">
                    <TypewriterComponent
                        options={{
                            cursor: ''
                        }}
                            onInit={(typewriter) => {
                            typewriter
                                .changeDelay(50)
                                .typeString(about)
                                .start()
                            }}
                        />
                </div> 
            </div>   
            <div className="links">
                <div className="tab-links">
                    <div className="links-header">Information</div>
                    <li><Link className="link-text" to="general.java">general</Link>&nbsp;&nbsp;&nbsp;&nbsp; ~/general.java</li>
                    <li><Link className="link-text" to="experience.cpp">experience</Link> &nbsp;&nbsp;&nbsp;&nbsp; ~/more info/experience.cpp</li>
                    <li><Link className="link-text" to="projects.yml">projects</Link> &nbsp;&nbsp;&nbsp;&nbsp; ~/more info/projects.yml</li>
                    <li><Link className="link-text" to="contact.json">contact</Link> &nbsp;&nbsp;&nbsp;&nbsp; ~/more info/contact.json</li>
                    <li><Link className="link-text" to="resume.pdf">resume</Link> &nbsp;&nbsp;&nbsp;&nbsp; ~/more info/resume.pdf</li>
                </div>
                <div className="social-links">
                    <div className="links-header">Social Media</div>
                    <li><a className="link-text" href="https://linkedin.com/in/giorgisamushia">linkedin</a></li>
                    <li><a className="link-text" href="https://github.com/umasshia?tab=repositories">github</a></li>
                    <li><a className="link-text" href="mailto:giorgisamu.gs@gmail.com">contact me</a></li>
                    <li><a className="link-text" href="https://drive.google.com/file/d/1FA09vNnUMPuDld58xdlus3JXH_hK2Y3_/view?usp=share_link" download>download my resume</a></li>
                </div>
            </div>
        </div>
    );
};

export default Home;
