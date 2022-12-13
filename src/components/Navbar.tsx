import { useState } from "react";
import { AiOutlineRight, AiOutlineMail, AiOutlineGithub, AiOutlineDown, AiOutlineFile, AiOutlineFolder, AiOutlineFolderOpen, AiOutlineLinkedin } from "react-icons/ai";
import { VscFiles } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [navExpanded, setNavExpanded] = useState(false);

    const files = {
        children: 
        [
            {
                name: 'general' 
            },
            {
                name: 'more info',
                children: [
                    {
                        name: 'employment'
                    },
                    {
                        name: 'projects'
                    },
                    {
                        name: 'contact',
                    }
                ]
            }

        ]
    }

    type TEntry = {
        name: string;
        children?: TEntry[];
    };

    function Entry({ entry, depth } : { entry: TEntry; depth: number }) {
        const [isExpanded, setIsExpanded] = useState(false);
        return  (
            <div>
                {entry.children ? (
                    <div className="file" onClick={() => setIsExpanded(!isExpanded)}
                    style={isExpanded ? {color: "white"} : {}}>
                        {isExpanded ? (
                            <>
                                <AiOutlineDown />
                                &nbsp;
                                <AiOutlineFolderOpen/>
                            </>
                        ) : (
                            <>
                                <AiOutlineRight />
                                    &nbsp;
                                <AiOutlineFolder/>
                            </>
                        )}
                        &nbsp;
                        {entry.name}
                    </div>
                ) : (
                    <div className="file">
                        <Link to={entry.name === 'general' ? `/` : `/${entry.name}`} >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <AiOutlineFile />
                            &nbsp;
                            {entry.name}
                        </Link>   
                    </div>
                )}
            {isExpanded && (
                <div style={{paddingLeft: `${depth * 15}px`}}>
                    {entry.children?.map(entry => (
                        <Entry entry={entry} depth={depth + 1} />
                    ))}
                </div>
            )}
            </div>
        )
    }

    return (
        <div className={navExpanded ? "navbar" : ""}>
            <div className="nav-btns">
                <VscFiles className="nav-btn" onClick={() => setNavExpanded(!navExpanded)}/>
                <a href="https://github.com/umasshia?tab=repositories">
                    <AiOutlineGithub className="nav-btn"/>
                </a>
                <a href = "https://linkedin.com/in/giorgisamushia">
                    <AiOutlineLinkedin className="nav-btn"/>
                </a>
                <a href = "mailto:giorgisamu.gs@gmail.com">
                    <AiOutlineMail className="nav-btn"/>
                </a>
            </div>
            {navExpanded ? (
                <div className="nav-sections">
                {files.children.map((entry) => (
                    <Entry entry={entry} depth={1} />
                ))}
                </div>
            ) : (null)}
        </div>
    );
};

export default Navbar;
