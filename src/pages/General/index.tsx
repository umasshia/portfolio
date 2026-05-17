import SyntaxHighlighter from 'react-syntax-highlighter'
import { railscasts } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './index.css'
import { formatAboutAsJava } from '../../data/formatters';

const General = () => {
    const text = formatAboutAsJava();
    return (
        <div className="code">
            <h1 className="sr-only">About Me</h1>
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
