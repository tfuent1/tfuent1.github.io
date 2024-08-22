import React from 'react';
import Divider from '@mui/material/Divider';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {
    return (
        <section id="contact">
            <h2>Contact</h2>
            <div id="emailDiv">
                <EmailIcon />
                <a href="mailto:tfuentes415@gmail.com">tfuentes415@gmail.com</a>
            </div>
            <div id='githubDiv'>
                <GitHubIcon />
                <a href='https://github.com/tfuent1'>GitHub</a>
            </div>
            <div id='linkedInDiv'>
                <LinkedInIcon />
                <a href='https://www.linkedin.com/in/thomasfuentes16?utm_source=share&utm_campaign=share_via&utm_content=profile&ut-m_medium=ios_app'>LinkedIn</a>
            </div>
        </section>
    );
};

export default Contact;
