import "./index.css";
import { Link } from "react-router-dom";
import TypewriterComponent from "typewriter-effect";
import { personal } from "../../data/personal";
import { about } from "../../data/about";

const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const Home = () => {
    return (
        <div className="home">
            <div className="header">
                <h1 className="name">{personal.name}</h1>
                <p className="title">{personal.title}</p>
                <div className="about">
                    {prefersReducedMotion ? (
                        <p>{about.bio}</p>
                    ) : (
                        <TypewriterComponent
                            options={{ cursor: '' }}
                            onInit={(typewriter) => {
                                typewriter
                                    .changeDelay(50)
                                    .typeString(about.bio)
                                    .start()
                            }}
                        />
                    )}
                </div>
            </div>
            <div className="links">
                <div className="tab-links">
                    <h2 className="links-header">Information</h2>
                    <ul aria-label="Portfolio pages">
                        <li><Link className="link-text" to="general.java">general</Link><span className="path-hint"> ~/general.java</span></li>
                        <li><Link className="link-text" to="experience.cpp">experience</Link><span className="path-hint"> ~/more info/experience.cpp</span></li>
                        <li><Link className="link-text" to="projects.yml">projects</Link><span className="path-hint"> ~/more info/projects.yml</span></li>
                        <li><Link className="link-text" to="contact.json">contact</Link><span className="path-hint"> ~/more info/contact.json</span></li>
                        <li><Link className="link-text" to="resume.pdf">resume</Link><span className="path-hint"> ~/more info/resume.pdf</span></li>
                    </ul>
                </div>
                <div className="social-links">
                    <h2 className="links-header">Social Media</h2>
                    <ul aria-label="Social media links">
                        <li><a className="link-text" href={personal.linkedin}>linkedin</a></li>
                        <li><a className="link-text" href={personal.github + "?tab=repositories"}>github</a></li>
                        <li><a className="link-text" href={`mailto:${personal.email}`}>contact me</a></li>
                        <li><a className="link-text" href={personal.resumeDownloadUrl} download>download my resume</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Home;
