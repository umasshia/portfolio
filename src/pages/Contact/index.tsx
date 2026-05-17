import SyntaxHighlighter from 'react-syntax-highlighter';
import { railscasts } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './index.css'
import { formatContactAsJson } from '../../data/formatters';

const Contact = () => {
    const CODE = formatContactAsJson();

    return (
        <div className="code">
            <h1 className="sr-only">Contact Information</h1>
            <SyntaxHighlighter
                showLineNumbers={true}
                language="json"
                style={railscasts}>
                {CODE}
            </SyntaxHighlighter>
        </div>
    );
};

export default Contact;
