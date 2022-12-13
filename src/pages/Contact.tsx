import packageInfo  from "../aboutMe.json";
import { railscast, CodeBlock } from "react-code-blocks";

const Contact = () => {
    return (
        <div className="home">
            <CodeBlock
                text={packageInfo.contact}
                language="json"
                showLineNumbers={true}
                theme={railscast}            
            />
        </div>
    );
};

export default Contact;