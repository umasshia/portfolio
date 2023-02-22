import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineFilePdf, AiOutlineHtml5 } from "react-icons/ai";
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
    const location = useLocation().pathname.slice(1)

    const [tabs, setTabs] = useState<string[]>([]);

    const [selected, setSelected] = useState<string>(location);

    
    useEffect(() => {
        console.log(location)
        if (location !== "") {
            if (!tabs.includes(location)) {
                setTabs([...tabs, location]);
            }
        } 
        setSelected(location);
    }, [location, tabs]);

    const handleTabClose = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, tab: string) => {
        console.log(tabs)
        const newTabs = tabs.filter((t) => t !== tab);
        console.log(newTabs)
        setTabs(newTabs);
        if (newTabs.length === 0) {
            navigate("/");
        } else {
            navigate(`/${newTabs[newTabs.length - 1]}`);
        }
        event.preventDefault();
    };

    function Tab({ tab }: { tab: string }) {
        return (
            <div
            className={selected === tab ? "tab selected" : "tab"}
            >
            <Link className="tab-outline"to={`/${tab}`}>
                <div className="tab-icon">
                {TAB_ICONS[tab] || <AiOutlineFilePdf />}
                </div>
                <div className="tab-name">{tab}</div>
                <div className="close-tab" onClick={(e) => handleTabClose(e,tab)}>
                <AiOutlineClose />
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
