import "./index.css"
import { resumePath, resumeFileName } from "../../data/resume";
import pdf from '../../icons/pdf.png';

const Resume = () => {
    return (
        <div className="resume-wrap">
            <h1 className="sr-only">Resume</h1>
            <div className="resume-header">
                <div className="resume-title">
                    <img src={pdf} alt="" aria-hidden="true" />
                    <span>{resumeFileName} — Preview</span>
                </div>
                <a href={resumePath} download className="resume-download">
                    Download PDF
                </a>
            </div>
            <iframe
                className="resume"
                src={resumePath}
                width="100%"
                height="100%"
                title="Resume PDF preview"
            >
                <p>Your browser does not support PDFs.
                    <a href={resumePath}>Download the resume</a>.
                </p>
            </iframe>
        </div>
    );
};

export default Resume;
