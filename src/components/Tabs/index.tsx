import { useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import yml from '../../icons/yml.png';
import java from '../../icons/java.png';
import cpp from '../../icons/cpp.png';
import json from '../../icons/json.png';
import pdf from '../../icons/pdf.png';
import "./index.css";

const TAB_ICONS: {[key: string]: JSX.Element} = {
    "general.java": <img src={java} alt='Java file'/>,
    "experience.cpp": <img src={cpp} alt='C++ file'/>,
    "projects.yml": <img src={yml} alt='YAML file'/>,
    "contact.json": <img src={json} alt='JSON file'/>,
};

const Tabs = () => {
    const navigate = useNavigate();
    const location = useLocation().pathname.slice(1)
    const tabListRef = useRef<HTMLDivElement>(null);

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

    const handleTabClose = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, tab: string) => {
        const newTabs = tabs.filter((t) => t !== tab);
        setTabs(newTabs);
        if (newTabs.length === 0) {
            navigate("/");
        } else {
            navigate(`/${newTabs[newTabs.length - 1]}`);
        }
        event.preventDefault();
        event.stopPropagation();
    };

    const handleTabKeyDown = (e: React.KeyboardEvent, index: number) => {
        let newIndex = index;
        if (e.key === 'ArrowRight') {
            newIndex = (index + 1) % tabs.length;
        } else if (e.key === 'ArrowLeft') {
            newIndex = (index - 1 + tabs.length) % tabs.length;
        } else if (e.key === 'Home') {
            newIndex = 0;
        } else if (e.key === 'End') {
            newIndex = tabs.length - 1;
        } else {
            return;
        }
        e.preventDefault();
        navigate(`/${tabs[newIndex]}`);
        // Focus the new tab
        const tabElements = tabListRef.current?.querySelectorAll('[role="tab"]');
        (tabElements?.[newIndex] as HTMLElement)?.focus();
    };

    function Tab({ tab, index }: { tab: string; index: number }) {
        const isSelected = selected === tab;
        return (
            <div
                className={isSelected ? "tab selected" : "tab"}
                role="tab"
                aria-selected={isSelected}
                tabIndex={isSelected ? 0 : -1}
                id={`tab-${tab}`}
                onKeyDown={(e) => handleTabKeyDown(e, index)}
                onClick={() => navigate(`/${tab}`)}
            >
                <div className="tab-icon">
                    {TAB_ICONS[tab] || <img src={pdf} alt='PDF file' />}
                </div>
                <span className="tab-name">{tab}</span>
                <button
                    className="close-tab"
                    onClick={(e) => handleTabClose(e, tab)}
                    aria-label={`Close ${tab}`}
                    tabIndex={-1}
                >
                    <AiOutlineClose aria-hidden="true" />
                </button>
            </div>
        );
    }

    return (
        <div
            className="tabs"
            role="tablist"
            aria-label="Open files"
            ref={tabListRef}
        >
            {tabs.map((tab, index) => (
                <Tab key={tab} tab={tab} index={index} />
            ))}
        </div>
    );
};

export default Tabs;
