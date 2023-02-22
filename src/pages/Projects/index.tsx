import { useState, useEffect } from 'react';

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
        setRepos(repos);
        };
    
        fetchRepos();
    }, []);
    
    return (
        <pre className='yml'>
        {repos.map((repo, num) => (
            <>
            {num * 4 + 1 + `\t`}name: {repo.name}<br />
            {num * 4 + 2 + `\t   `}description: {repo.description}<br />
            {num * 4 + 3 + `\t   `}link: <a href={repoUrl + repo.name}>{repoUrl + repo.name}</a><br />
            {num * 3 + 4 }<br />
            </>
        ))}
        </pre>
    );
};

export default Projects;
