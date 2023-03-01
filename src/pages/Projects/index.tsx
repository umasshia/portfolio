import { useState, useEffect } from 'react';
import "./index.css"

interface Repo {
    name: string;
    html_url: string;
    description: string;
}

function Projects() {
    const [repos, setRepos] = useState<Repo[]>([]);
    const repoUrl = 'https://github.com/umasshia/'

    useEffect(() => {
        const fetchRepos = async () => {
            const response = await fetch('https://api.github.com/users/umasshia/repos');
        const data = await response.json(); 
        const repos = data.map((repo: any) => ({
            name: repo.name,
            description: repo.description,
            url: repo.html_url,
        }));
        console.log(repos)
        setRepos(repos);
        };
        fetchRepos();
    }, []);
    
    return (
        <pre className='yml'>
            {1 + `\t`}# Projects <br />
        {repos.map((repo, num) => (
            <>
            {num * 4 + 2 + `\t`}name: {repo.name}<br />
            {num * 4 + 3 + `\t   `}description: {repo.description}<br />
            {num * 4 + 4 + `\t   `}link: <a href={repoUrl + repo.name}>{repoUrl + repo.name}</a><br />
            {num * 4 + 5 }<br />
            </>
        ))}
        </pre>
    );
};

export default Projects;
