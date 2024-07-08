import React from 'react';

const Project = ({ title, description, link }) => {
    return (
        <div className="project">
            <h3 href={link}>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Project;
