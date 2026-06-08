import { useEffect, useState } from "react";

function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    
    useEffect(() => {
        function fetchProjects() {
            let url = "https://api.github.com/users/mlnvitoria/repos?type=owner&sort=updated&direction=desc";

            fetch(url)
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        setErrorMessage("Sorry, it was not possible to retrieve the projects. You can still find them at GitHub.");
                        setLoading(false);
                        throw new Error("Not able to retrieve projects");
                    }
                })
                .then((responseData) => {
                    let data = [];
                    responseData.map((repo) => {
                        if (!repo.archived) {
                            data.push({
                                id: repo.id,
                                name: repo.name,
                                description: repo.description,
                                language: repo.language,
                                url: repo.html_url,
                                homepage: repo.homepage,
                                updated_at: new Date(repo.updated_at).toLocaleDateString('en-CA'),
                            });
                        }
                    });
                    setProjects(data);
                    setLoading(false);
                });
        };

        fetchProjects();
    });
    

    return <>
        <h2 className='text-2xl font-bold mb-4'>My Projects</h2>
        {(loading) ? <p>Loading...</p> : ""}
        {(errorMessage !== "" && projects.length === 0) ? <p>{errorMessage}</p> : ""}
        <div className="flex flex-row flex-nowrap gap-2 overflow-x-auto overscroll-none">
            {projects.map((repo, index) => (
                <div key={repo.id + "-" + index} className="min-w-sm lg:min-w-md bg-zinc-700 border-2 border-zinc-950 rounded-2xl content-center px-5 py-3">
                    <h4 className="text-lg font-bold mb-1.5">{repo.name}</h4>
                    <p>{repo.description}</p>
                    <p>Main language used (according to GitHub): {repo.language}</p>
                    <p>Last time updated: {repo.updated_at}</p>
                    <p className="flex gap-3 mt-2">
                        <a href={repo.url} target="_blank" className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 border-2 border-neutral-950 rounded-2xl align-middle">Repository</a>
                        {(repo.homepage !== null) ? <a href={repo.homepage} target="_blank" className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 border-2 border-neutral-950 rounded-2xl align-middle">Homepage</a> : "" }
                    </p>
                </div>
            ))}
        </div>
    </>;
}

export default Projects;