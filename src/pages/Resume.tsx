
const Resume = () => {

    return (
        <div className="resume-wrap">
            <embed className="resume"
                src={require('../Resume.pdf#toolbar=0')}
                width="80%"
                height="100%"
            >
            </embed>
        </div>
    );
};

export default Resume;