import "./index.css"

const Resume = () => {

    return (
        <div className="resume-wrap">
            <iframe className="resume"
                src={require("../docs/Resume.pdf")}
                width="80%"
                height="100%"
                title="Resume"
            >
            </iframe>
        </div>
    );
};

export default Resume;