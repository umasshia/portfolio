import SyntaxHighlighter from 'react-syntax-highlighter'
import { railscasts } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './index.css'

const General = () => {
    const text = `
    // hi, I'm Giorgi, an undergraduate software developer
    class AboutMe() {
        const Name = "Giorgi Samushia";
        const Date_of_Birth = "04/26/2001";
        const University = "Manhattan College";
        const Degree = "Bachelor of Science";
        const Major = "Computer Science";
        const Graduation_Month = "May 2023";
        var Languages = {"C", "C++", "Java", "C#", "Python", "R", "Bash", "AWK",
                        "HTML", "CSS", "JavaScript", "TypeScript", "MATLAB"};
        var Frameworks = {"React.js", "Hibernate", "Entity Framework", ".NET"}
        var Databases = {"MySQL", "NoSQL", "SQL Server"}
        var Cloud_Services = {"AWS", "Firebase", "Microsoft Azure"}
        var Other = {"Node.js", "JSON", "APIs", "VMs", "Git"}
    }`;
    return (
        <div className="code">
            <SyntaxHighlighter
                showLineNumbers={true}
                language='java'
                style={railscasts}>
                {text}
            </SyntaxHighlighter>
        </div>
    );
};

export default General;
