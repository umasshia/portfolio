import { useCallback, useRef, useState } from "react";
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
import { resumePath } from "../../data/resume";
import { personal } from "../../data/personal";

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
        return <img alt='Java file' src={java} />
    case 'experience.cpp':
        return <img alt='C++ file' src={cpp} />
    case 'projects.yml':
            return <img alt='YAML file' src={yml} />
    case 'contact.json':
            return <img alt='JSON file' src={json} />
    case 'resume.pdf':
            return <img alt='PDF file' src={pdf} />
    case 'openfolder':
        return <img alt='Open folder' src={open} />
    case 'closedfolder':
        return <img alt='Closed folder' src={closed} />
    default:
        return;
    }
}

function Entry({ entry, depth }: EntryProps) {
    const [isExpanded, setIsExpanded] = useState(true);

    const toggleExpand = () => setIsExpanded(!isExpanded);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleExpand();
        }
    };

    const renderFileInfo = () => {
        if (entry.children) {
            return (
                <div
                    className={entry.name === 'GIORGI SAMUSHIA' ? 'top' : 'folder-icon'}
                    role="treeitem"
                    aria-expanded={isExpanded}
                    tabIndex={0}
                    onKeyDown={handleKeyDown}
                >
                    {isExpanded ? <AiOutlineDown aria-hidden="true" /> : <AiOutlineRight aria-hidden="true" />}
                    {entry.name !== 'GIORGI SAMUSHIA' ? getFileIcon(isExpanded ? 'openfolder' : 'closedfolder') : null}
                    <span>{entry.name}</span>
                </div>
            );
            } else {
            return (
                <div className="file-icon" role="treeitem">
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
        <div className="file" onClick={entry.children ? toggleExpand : undefined}>
            {renderFileInfo()}
        </div>
        {isExpanded && entry.children && (
        <div style={{ paddingLeft: `${depth + 12}px` }} role="group">
            {entry.children.map((childEntry) => (
            <Entry key={childEntry.name} entry={childEntry} depth={depth + 1} />
            ))}
        </div>
        )}
    </div>
    );
}

function NavSections() {
    return (
        <div className="nav-sections" role="tree" aria-label="File explorer">
            {files.children.map((entry) => (
            <Entry key={entry.name} entry={entry} depth={1} />
            ))}
        </div>
    );
}

const Navbar = () => {
    const [navExpanded, setNavExpanded] = useState(true);
    const navRef = useRef<HTMLElement>(null);

    const handleMobileClose = useCallback(() => {
        if (window.innerWidth <= 768) {
            setNavExpanded(false);
        }
    }, []);

    return (
        <nav className={navExpanded ? "navbar" : "navbar closed"} aria-label="Site navigation" ref={navRef}>
            <div className="nav-btns" role="toolbar" aria-label="Quick actions">
                <button
                    className="nav-btn files"
                    onClick={() => setNavExpanded(!navExpanded)}
                    aria-expanded={navExpanded}
                    aria-label="Toggle file explorer"
                >
                    <VscFiles aria-hidden="true" />
                </button>
                <a target="_blank" rel="noopener noreferrer" href={personal.github + "?tab=repositories"} aria-label="GitHub profile">
                    <AiOutlineGithub className="nav-btn github" aria-hidden="true" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href={personal.linkedin} aria-label="LinkedIn profile">
                    <AiOutlineLinkedin className="nav-btn linkedin" aria-hidden="true" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href={`mailto:${personal.email}`} aria-label="Send email">
                    <AiOutlineMail className="nav-btn mail" aria-hidden="true" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href={resumePath} aria-label="Download resume" download>
                    <HiOutlineDocumentDownload className="nav-btn download" aria-hidden="true" />
                </a>
            </div>
            {navExpanded && (
                <>
                    <NavSections />
                    {/* Mobile overlay backdrop */}
                    <div
                        className="nav-overlay"
                        onClick={handleMobileClose}
                        aria-hidden="true"
                    />
                </>
            )}
        </nav>
    );
};

export default Navbar;
