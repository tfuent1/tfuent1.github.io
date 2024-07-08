import React from 'react';
import Project from './Project';

const Projects = () => {
    const projectList = [
        { title: 'Budget Allocation React App', description: 'Project description.', link: 'https://react-budget-app-alpha.vercel.app/' },
        { title: 'Project Title 2', description: 'Project description.', link: 'https://react-budget-app-alpha.vercel.app/' },
        // Add more projects as needed
    ];

    return (
        <section id="projects">
            <h2>Projects</h2>
            {projectList.map((project, index) => (
                <Project key={index} title={project.title} description={project.description} link={project.link} />
            ))}
        </section>
    );
};

export default Projects;
