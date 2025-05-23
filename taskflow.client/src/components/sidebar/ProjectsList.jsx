import { SidebarProjectDiv, SidebarProjectContainer } from "../../styles/Sidebar.style.js";

export function ProjectList({ projects }) {
    return (
        <SidebarProjectContainer>
            <h2>Projects</h2>
            {projects.map(project => (
                <SidebarProjectDiv
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    key={project}>{project}</SidebarProjectDiv>
            ))}
        </SidebarProjectContainer>
    );
}