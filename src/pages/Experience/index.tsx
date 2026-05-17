import SyntaxHighlighter from 'react-syntax-highlighter';
import { railscasts } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './index.css'
import { formatExperienceAsCpp } from '../../data/formatters';

const Experience = () => {
    const text = formatExperienceAsCpp();

    return (
        <div className="code">
            <h1 className="sr-only">Experience</h1>
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
