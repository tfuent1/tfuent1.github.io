import React from 'react';
import Project from './Project';

const Projects = () => {
    const projectList = [
        { title: 'Project Title 1', description: 'Project description.' },
        { title: 'Project Title 2', description: 'Project description.' },
        // Add more projects as needed
    ];

    return (
        <section id="projects">
            <h2>Projects</h2>
            {projectList.map((project, index) => (
                <Project key={index} title={project.title} description={project.description} />
            ))}
        </section>
    );
};

export default Projects;
