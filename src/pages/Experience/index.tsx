import txt from "../docs/experience.txt"
import { railscast, CodeBlock } from "react-code-blocks";
import { useFetchText } from "../../utils/FetchTxt";

const Experience = () => {
    const text = useFetchText(txt);
    return (
        <div className="code">
            <CodeBlock
                text={text}
                language="cpp"
                showLineNumbers={true}
                theme={railscast}   
            />
        </div>
    );
};

export default Experience;