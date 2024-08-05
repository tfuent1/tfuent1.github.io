import React from 'react';
import cert1 from '../assets/developingFrontEndAppsWithReact.png'
import cert2 from '../assets/pythonBasics.png'
import cert3 from '../assets/introductionToWebDevelopmentWithHtmlCssJavaScript.png'
import cert4 from '../assets/gettingStartedWithGitAndGitHub.png'
import cert5 from '../assets/introductionToCloudComputing.png'

const Achievements = () => {
    return (
        <section id="achievements">
            <h2>Achievements</h2>
            <div id='thm-badge'>
                <img src="https://tryhackme-badges.s3.amazonaws.com/tfuent1.png?0" alt="TryHackMe" />
            </div>
            <div id='certificates'>
                <img id='cert1' src={cert1} alt="Developing Front-End Apps with React" />
                <img id='cert2' src={cert2} alt="Python Basics" />
                <img id='cert3' src={cert3} alt="Introduction to Web Development with HTML, CSS, JavaScript" />
                <img id='cert4' src={cert4} alt='Getting Started with Git and GitHub' />
                <img id='cert5' src={cert5} alt='Introduction to Cloud Computing' />
            </div>
        </section>
    );
};

export default Achievements;