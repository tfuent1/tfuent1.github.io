import React from 'react';
import Project from './Project';

const Projects = () => {
    const projectList = [
        { title: 'Budget Allocation React App', description: 'This link will bring you to my Budget Allocation application built in React. This project is a simple UI to track budget between different departments in a company.', link: 'https://react-budget-app-alpha.vercel.app/' },
        { title: 'Shopping Cart React App', description: 'This link will bring you to my Shopping App built with React. This app does not have much functionality aside from using it to practice building and styling my front end in React.', link: 'https://shopping-app-six-olive.vercel.app/' },
        { title: 'Kirsti Author Site (in progress)', description: 'This link brings you to an author site I built for my fiance. While it is not completely finished yet, what is there has been built with React. It allowed me to practice UI design, and helped me learn how state management is utilized in React. Currently every part of the website has been built by hand, including the User authentication and authorization.', link: 'https://kirsti-portfolio.vercel.app/' },
        { title: 'To-Do List', description: 'This link will bring you to a simple To-Do list built using React. This is a super simple app that lets you add To-Do items to a list. In this list you can check the item off the list, and edit and delete items.', link: 'https://to-do-list-kohl-beta-46.vercel.app/' },
        { title: 'Mental Health App (in progress)', description: 'This is a link to a demo video on Youtube of a Mental Health App I am currently developing in Flutter. It is in very early development still, but still has many working features such as journal entries, duties lists, emotion identifier, and Firebase intergation for user authorization and authentication.', link: 'https://youtu.be/_wPnnUpGP0o?si=KhobvGk_c72PSluB' },
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
