import txt from "../docs/contact.txt"
import { railscast, CodeBlock } from "react-code-blocks";
import { useFetchText } from "../../utils/FetchTxt";

const Contact = () => {
    const text = useFetchText(txt);
    return (
        <div className="code">
            <CodeBlock
                text={text}
                language="json"
                showLineNumbers={true}
                theme={railscast}   
            />
        </div>
    );
};

export default Contact;