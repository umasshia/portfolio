import { railscast, CodeBlock } from "react-code-blocks";
import txt from "../docs/general.txt"
import { useFetchText } from "../../utils/FetchTxt";

const General = () => {
    const text = useFetchText(txt);
    return (
        <div className="code">
            <CodeBlock
                text={text}
                language="java"
                showLineNumbers={true}
                theme={railscast}   
            />
        </div>
    );
};

export default General;
