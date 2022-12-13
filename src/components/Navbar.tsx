import { useState } from "react";
import { AiOutlineRight, AiOutlineMail, AiOutlineFilePdf, AiOutlineGithub, AiOutlineDown, AiOutlineFolder, AiOutlineFolderOpen, AiOutlineLinkedin, AiOutlineHtml5 } from "react-icons/ai";
import { HiOutlineDocumentDownload } from "react-icons/hi"
import { VscFiles,VscJson } from "react-icons/vsc";
import { SiJavascript } from "react-icons/si"
import { FaJava } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [navExpanded, setNavExpanded] = useState(false);
    const files = {
        children: 
        [
            {
                name: 'general.java' 
            },
            {
                name: 'more info',
                children: [
                    {
                        name: 'employment.js'
                    },
                    {
                        name: 'projects.html'
                    },
                    {
                        name: 'contact.json',
                    },
                    {
                        name: 'resume.pdf',
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
                        <Link to={entry.name === 'general.java' ? `/portfolio` : `/portfolio/${entry.name}`} >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {entry.name === 'general.java' ? (<FaJava />)
                                    : entry.name === 'employment.js' ? (<SiJavascript />)
                                    : entry.name === 'projects.html' ? (<AiOutlineHtml5 />)
                                    : entry.name === 'contact.json' ? (<VscJson />) : (<AiOutlineFilePdf />)}
                            &nbsp;
                            {entry.name}
                        </Link>   
                    </div>
                )}
            {isExpanded && (
                <div style={{paddingLeft: `${depth * 15}px`}}>
                    {entry.children?.map(entry => (
                        <Entry key={entry.name} entry={entry} depth={depth + 1} />
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
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/umasshia?tab=repositories" title="Github">
                    <AiOutlineGithub className="nav-btn"/>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/giorgisamushia" title="LinkedIn">
                    <AiOutlineLinkedin className="nav-btn" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="mailto:giorgisamu.gs@gmail.com" title="Contact Me">
                    <AiOutlineMail className="nav-btn"/>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1zEWd_3VHZTNonvaibEt44cCctmDtbN2m/view?usp=share_link" title="Download My Resume" download>
                    <HiOutlineDocumentDownload className="nav-btn"/>
                </a>
            </div>
            {navExpanded ? (
                <div className="nav-sections">
                {files.children.map((entry) => (
                    <Entry key={entry.name} entry={entry} depth={1} />
                ))}
                </div>
            ) : (null)}
        </div>
    );
};

export default Navbar;
