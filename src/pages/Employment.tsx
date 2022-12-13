import packageInfo  from "../aboutMe.json";
import { railscast, CodeBlock } from "react-code-blocks";

const Employment = () => {
    return (
        <div className="home">
            <CodeBlock
                text={packageInfo.employment}
                language="javascript"
                showLineNumbers={true}
                theme={railscast}            
            />
        </div>
    );
};

export default Employment;