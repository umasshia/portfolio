import { useState, useEffect } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { railscasts } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import "./index.css"
import { personal } from '../../data/personal';

interface Repo {
    name: string;
    description: string;
    url: string;
    language: string | null;
}

function formatReposAsYaml(repos: Repo[]): string {
    let yaml = "# Projects\n";
    repos.forEach((repo) => {
        yaml += `\n- name: ${repo.name}\n`;
        if (repo.description) {
            yaml += `  description: "${repo.description}"\n`;
        }
        if (repo.language) {
            yaml += `  language: ${repo.language}\n`;
        }
        yaml += `  link: ${repo.url}\n`;
    });
    return yaml;
}

function Projects() {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch('https://api.github.com/users/umasshia/repos');
                if (!response.ok) throw new Error(`GitHub API error: ${response.status}`);
                const data = await response.json();
                const repos = data.map((repo: any) => ({
                    name: repo.name,
                    description: repo.description,
                    url: repo.html_url,
                    language: repo.language,
                }));
                setRepos(repos);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchRepos();
    }, []);

    if (loading) {
        return (
            <div className="code">
                <h1 className="sr-only">Projects</h1>
                <div className="loading-skeleton" aria-hidden="true">
                    <div className="skeleton-line" />
                    <div className="skeleton-line short" />
                    <div className="skeleton-line" />
                    <div className="skeleton-line short" />
                    <div className="skeleton-line" />
                </div>
                <p className="sr-only" role="status">Loading projects...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="code">
                <h1 className="sr-only">Projects</h1>
                <SyntaxHighlighter
                    showLineNumbers={true}
                    language="yaml"
                    style={railscasts}>
                    {`# Error loading projects\n# ${error}\n# Visit: ${personal.github}?tab=repositories`}
                </SyntaxHighlighter>
            </div>
        );
    }

    const yaml = formatReposAsYaml(repos);

    return (
        <div className="code">
            <h1 className="sr-only">Projects</h1>
            <SyntaxHighlighter
                showLineNumbers={true}
                language="yaml"
                style={railscasts}>
                {yaml}
            </SyntaxHighlighter>
        </div>
    );
}

export default Projects;
