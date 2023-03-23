import txt from "../docs/experience.txt"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { railscasts } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useFetchText } from "../../utils/FetchTxt";

const Experience = () => {
    const text = useFetchText(txt);
    return (
        <div className="code">
            <SyntaxHighlighter language="cpp" style={railscasts}>
                {text}   
            </SyntaxHighlighter>
        </div>
    );
};

export default Experience;