import "./index.css";
import { Link } from "react-router-dom";
import TypewriterComponent from "typewriter-effect";

const Home = () => {
    const about = "As a driven and versatile Computer Science graduate with a Bachelor's degree from Manhattan College, I bring a wealth of technical expertise and a passion for innovation to the table. With a solid foundation in a multitude of programming languages including C++, Java, Python, and JavaScript, coupled with hands-on experience in web development frameworks such as React.js and Django, I offer a comprehensive skill set tailored to meet the dynamic demands of the tech industry. From developing intricate algorithms to crafting robust database systems and implementing cloud solutions, my proficiency extends across the spectrum of software development. My adeptness in utilizing tools like AWS and Firebase, coupled with experience in multimedia content creation and live stream production using OBS Studio, underscores my adaptability and creativity in tackling diverse projects. With a proven track record of academic excellence, including Phi Beta Kappa and Magna Cum Laude distinctions, combined with practical experience in roles such as Creative Technology Specialist and Tutor, I am poised to deliver innovative solutions and drive impactful results in any professional setting. Whether it's collaborating on complex projects, providing technical support, or contributing to cutting-edge research, I am committed to leveraging my skills and expertise to exceed expectations and contribute positively to any team or organization."

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
