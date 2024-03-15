import SyntaxHighlighter from 'react-syntax-highlighter';
import { railscasts } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './index.css'

const Experience = () => {
    const text = `
    //job history

    #include "Job.h"
    #include <map>

    using namespace std;

    class CurrentJob::Job {
        public:
            string title = "Creative Technology Specialist";
            string company = "Democracy at Work";
            string dates = "May 2023 - Present";
            map<int,string> activities = {
                { 1 : "Maintain and remodel the company website using NationBuilder, ensuring accurate and up-to-date content using HTML, CSS, JavaScript.", },
                { 2 : "Utilize OBS Studio for live stream production and multimedia content creation.", },
                { 3 : "Configure domain hosting and managed DNS settings to ensure reliable website accessibility and smooth operation.", },
                { 4 : "Provide technical support and effectively troubleshoot website issues to ensure seamless functionality.", },
                { 5 : "Collaborate with the supervisor to address day-to-day technology challenges and implement solutions" }};
    }		

    class PastJobOne::Job {
        public:
            string title = "Tutor";
            string company = "Manhattan College";
            string dates = "August 2022 - May 2023";
            string activity = "Conduct Training in Computer Science and Mathematics courses";
            string[] courses_taught = ["Object-oriented Design in Java", "Web Programming", "Systems Programming",
                            "Calculus", "Computational Linear Algebra for Computer Scientists"];
            string[] languages_taught = ["C++", "Java", "HTML", "CSS", "PHP", "JavaScript", "Bash", "Matlab"] ;
    }		

    class PastJobTwo::Job {
        public:
            string title: "Research Scholar";
            string company: "Manhattan College";
            string start: "June 2022";
            string end: "October 2022";
            map<int,string> activities = {
                { 1 : "Created virtual machines employing shell scripting in a Linux environment" },
                { 2 : "Developed an AWK script that predicted the application types from the collected system call patterns" },
                { 3 : "Tested hardware performance on the machines utilizing various benchmark applications" },
                { 4 : "Collected system calls from the application with the strace utility that were used in the script development" }};
    }
    `

    return (
        <div className="code">
            <SyntaxHighlighter
                showLineNumbers={true}
                language="cpp"
                style={railscasts}>
                {text}   
            </SyntaxHighlighter>
        </div>
    );
};

export default Experience;