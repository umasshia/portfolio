import { useEffect, useState } from "react";
import { AiOutlineFilePdf, AiOutlineHtml5 } from "react-icons/ai";
import { FaJava } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { VscJson } from "react-icons/vsc";
import { Link, useLocation, useNavigate } from "react-router-dom";


const Tabs = () => {    

    const navigate = useNavigate()
    
    const [tabs, setTabs] = useState<string[]>([
        "general.java"
    ])

    let selected = useLocation().pathname.substring(1);
    if (selected === "") selected = "general.java";

    useEffect(() => {
        if (!tabs.includes(selected)) {
            setTabs([...tabs, selected]);
        }
    }, [selected, tabs])
    
    const handleTabClose = (tab:string) => {
        var temp = [...tabs]
        var index = temp.indexOf(tab)
        if (index !== 0) {
            if (selected === tab) {    
                navigate(`/`)
            }
            temp.splice(index, 1);
            setTabs(temp)
        }
    }

    function Tab({ tab } : { tab:string }) {
        return  (
            <div>
                    <div className="tab" style={selected === tab ? {color: "white", borderBottom: "solid 1px"} : {}}>
                        <Link to={tab === 'general.java' ? `/` : `/${tab}`} >
                            &nbsp;
                                {tab === 'general.java' ? (<FaJava />)
                                    : tab === 'employment.js' ? (<SiJavascript />)
                                    : tab === 'projects.html' ? (<AiOutlineHtml5 />)
                                    : tab === 'contact.json' ? (<VscJson />) : (<AiOutlineFilePdf />)}
                            &nbsp; 
                        {tab}
                        &nbsp; &nbsp; &nbsp; 
                    </Link>   
                    <div className="close-tab" onClick={() => handleTabClose(tab)}>X</div>
                    </div>
            </div>
        )
    }
        

    return (
        <div className="tabs">
            {tabs.map(tab => (
                <Tab key={tab} tab={tab} />
            ))}
        </div>
    );
};

export default Tabs;
