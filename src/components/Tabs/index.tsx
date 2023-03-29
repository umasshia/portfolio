import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import yml from '../../icons/yml.png';
import java from '../../icons/java.png';
import cpp from '../../icons/cpp.png';
import json from '../../icons/json.png';
import pdf from '../../icons/pdf.png';
import "./index.css";

const TAB_ICONS: {[key: string]: JSX.Element} = {
    "general.java": <img src={java} alt='java'/>,
"experience.cpp": <img src={cpp} alt='cpp'/>,
"projects.yml": <img src={yml} alt='yml'/>,
"contact.json": <img src={json} alt='json'/>,
};

const Tabs = () => {
    const navigate = useNavigate();
    const location = useLocation().pathname.slice(1)

    const [tabs, setTabs] = useState<string[]>([]);

    const [selected, setSelected] = useState<string>(location);

    
    useEffect(() => {
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
                {TAB_ICONS[tab] || <img src={pdf} alt='pdf' />}
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
