import { useState } from "react";
import { AiOutlineRight, AiOutlineMail, AiOutlineFilePdf, AiOutlineGithub, AiOutlineDown, AiOutlineFolder, AiOutlineFolderOpen, AiOutlineLinkedin, AiOutlineHtml5 } from "react-icons/ai";
import { HiOutlineDocumentDownload } from "react-icons/hi"
import { VscFiles,VscJson } from "react-icons/vsc";
import { SiJavascript } from "react-icons/si"
import { FaJava } from 'react-icons/fa';
import './index.css';
import { Link } from "react-router-dom";

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

interface EntryProps {
    entry: TEntry;
    depth: number;
}

function getFileIcon(fileName: string) {
    switch(fileName) {
    case 'general.java':
        return <FaJava />;
    case 'employment.js':
        return <SiJavascript />;
    case 'projects.html':
        return <AiOutlineHtml5 />;
    case 'contact.json':
        return <VscJson />;
    default:
        return <AiOutlineFilePdf />;
    }
}

function Entry({ entry, depth }: EntryProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => setIsExpanded(!isExpanded);

    const fileClass = isExpanded ? 'file file-expanded' : 'file';

    const renderFileInfo = () => {
        if (entry.children) {
            return isExpanded ? (
                <div className="folder-icon">
                <AiOutlineDown />
                <AiOutlineFolderOpen />  
                <span className="entry-name">{entry.name}</span>
                </div>
            ) : (
                <div className="folder-icon">
                <AiOutlineRight />
                <AiOutlineFolder />
                <span className="entry-name">{entry.name}</span>
                </div>    
            );
            } else {
            return (
                <div className="file-icon">
                {getFileIcon(entry.name)}
                <Link to={entry.name === 'general.java' ? `/` : `/${entry.name}`} >
                    <span className="entry-name">{entry.name}</span>
                </Link>
                </div>
            );
        }
    };

    return (
    <div>
        <div className={fileClass} onClick={toggleExpand}>
            {renderFileInfo()}
        </div>
        {isExpanded && (
        <div style={{ paddingLeft: `${depth * 15}px` }}>
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
    const [navExpanded, setNavExpanded] = useState(false);

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
        {navExpanded && renderNavSections()}
        </div>
    );
};

export default Navbar;
