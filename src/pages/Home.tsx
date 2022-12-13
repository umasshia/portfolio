import packageInfo  from "../aboutMe.json";
import { railscast, CodeBlock } from "react-code-blocks";

const Home = () => {

    return (
        <div className="home">
            <CodeBlock
                text={packageInfo.general}
                language="java"
                showLineNumbers={true}
                theme={railscast}
                
            />
        </div>
    );
};

export default Home;
