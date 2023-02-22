import { useEffect, useState } from "react";
import { AiOutlineFilePdf, AiOutlineHtml5 } from "react-icons/ai";
import { FaJava } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { VscJson } from "react-icons/vsc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./index.css";

const TAB_ICONS: {[key: string]: JSX.Element} = {
"general.java": <FaJava />,
"employment.js": <SiJavascript />,
"projects.html": <AiOutlineHtml5 />,
"contact.json": <VscJson />,
};

const Tabs = () => {
const navigate = useNavigate();

const [tabs, setTabs] = useState<string[]>(["general.java"]);

let selected = useLocation().pathname.substring(1);
if (selected === "") selected = "general.java";

useEffect(() => {
    if (!tabs.includes(selected)) {
    setTabs([...tabs, selected]);
    }
}, [selected, tabs]);

const handleTabClose = (tab: string) => {
    var temp = [...tabs];
    var index = temp.indexOf(tab);
    if (index !== 0) {
    if (selected === tab) {
        navigate(`/`);
    }
    temp.splice(index, 1);
    setTabs(temp);
    }
};

function Tab({ tab }: { tab: string }) {
    return (
        <div
        className={selected === tab ? "tab selected" : "tab"}
        >
        <Link className="tab-outline"to={tab === "general.java" ? "/" : `/${tab}`}>
            <div className="tab-icon">
            {TAB_ICONS[tab] || <AiOutlineFilePdf />}
            </div>
            <div className="tab-name">{tab}</div>
            <div className="close-tab" onClick={() => handleTabClose(tab)}>
            X
            </div>
        </Link>
        </div>
    );
}


return (
    <div className="tabs">
    {tabs.map((tab) => (
        <Tab key={tab} tab={tab} />
    ))}
    </div>
);
};

export default Tabs;
