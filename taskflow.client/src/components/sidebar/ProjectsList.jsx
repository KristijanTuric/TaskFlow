export function ProjectList({projects}) {
    return (
        <div>
            <h2>Projects</h2>
            {projects.map(project => (
                <div key={project}>{project}</div>
            ))}
        </div>
    );
}