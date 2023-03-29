import { useState } from "react";
import { AiOutlineRight, AiOutlineMail, AiOutlineGithub, AiOutlineDown, AiOutlineLinkedin } from "react-icons/ai";
import { HiOutlineDocumentDownload } from "react-icons/hi"
import yml from '../../icons/yml.png';
import java from '../../icons/java.png';
import cpp from '../../icons/cpp.png';
import json from '../../icons/json.png';
import pdf from '../../icons/pdf.png';
import open from '../../icons/open.png';
import closed from '../../icons/closed.png';
import { VscFiles } from "react-icons/vsc";
import './index.css';
import { Link } from "react-router-dom";

const files = {
    children: [
        {
            name: 'GIORGI SAMUSHIA',
            children: 
            [
                {
                    name: 'general.java' 
                },
                {
                    name: 'more info',
                    children: [
                        {
                            name: 'experience.cpp'
                        },
                        {
                            name: 'projects.yml'
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
    ]
}

type TEntry = {
    name: string;
    children?: TEntry[];
};

interface EntryProps {
    entry: TEntry;
    depth: number;
}

function getFileIcon(fileName: string) {
    switch(fileName) {
    case 'general.java':
        return <img alt ='java' src={java} />
    case 'experience.cpp':
        return <img alt ='cpp' src={cpp} />
    case 'projects.yml':
            return <img alt='yaml' src={yml} />
    case 'contact.json':
            return <img alt='json' src={json} />
    case 'resume.pdf':
            return <img alt='pdf' src={pdf} />
    case 'openfolder':
        return <img alt='open' src={open} />
    case 'closedfolder':
        return <img alt='' src={closed} />
    default:
        return;
    }
}

function Entry({ entry, depth }: EntryProps) {
    const [isExpanded, setIsExpanded] = useState(true);

    const toggleExpand = () => setIsExpanded(!isExpanded);

    const renderFileInfo = () => {
        if (entry.children) {
            return (
                <div className={entry.name === 'GIORGI SAMUSHIA' ? 'top' : 'folder-icon'}>
                    {isExpanded ? <AiOutlineDown /> : <AiOutlineRight />}
                    {entry.name !== 'GIORGI SAMUSHIA' ? getFileIcon(isExpanded ? 'openfolder' : 'closedfolder') : null}
                    <span>{entry.name}</span>
                </div>
            );
            } else {
            return (
                <div className="file-icon">
                {getFileIcon(entry.name)}
                    <Link to={`/${entry.name}`} >
                        <span className="entry-name">{entry.name}</span>
                    </Link>
                </div>
            );
        }
    };

    return (
    <div>
        <div className="file" onClick={toggleExpand}>
            {renderFileInfo()}
        </div>
        {isExpanded && (
        <div style={{ paddingLeft: `${depth + 12}px` }}>
            {entry.children?.map((childEntry) => (
            <Entry key={childEntry.name} entry={childEntry} depth={depth + 1} />
            ))}
        </div>
        )}
    </div>
    );
}

function renderNavSections() {
    return (
        <div className="nav-sections">
            {files.children.map((entry) => (
            <Entry key={entry.name} entry={entry} depth={1} />
            ))}
        </div>
    );
}

const Navbar = () => {
    const [navExpanded, setNavExpanded] = useState(true);

    return (
        <div className={navExpanded ? "navbar" : "navbar closed"}>
            <div className="nav-btns">
                <VscFiles className="nav-btn files" onClick={() => setNavExpanded(!navExpanded)}/>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/umasshia?tab=repositories" title="Github">
                <AiOutlineGithub className="nav-btn github"/>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/giorgisamushia" title="LinkedIn">
                <AiOutlineLinkedin className="nav-btn linkedin" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="mailto:giorgisamu.gs@gmail.com" title="Contact Me">
                <AiOutlineMail className="nav-btn mail"/>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1FA09vNnUMPuDld58xdlus3JXH_hK2Y3_/view?usp=share_link" title="Download My Resume" download>
                <HiOutlineDocumentDownload className="nav-btn download"/>
                </a>
            </div>
        {navExpanded && renderNavSections()}
        </div>
    );
};

export default Navbar;
