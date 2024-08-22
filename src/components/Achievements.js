import React from 'react';
import Divider from '@mui/material/Divider';
import cert1 from '../assets/developingFrontEndAppsWithReact.png'
import cert2 from '../assets/pythonBasics.png'
import cert3 from '../assets/introductionToWebDevelopmentWithHtmlCssJavaScript.png'
import cert4 from '../assets/gettingStartedWithGitAndGitHub.png'
import cert5 from '../assets/introductionToCloudComputing.png'
import badge1 from '../assets/burped.png'
import badge2 from '../assets/catLinuxTxt.png'
import badge3 from '../assets/metasploitable.png'
import badge4 from '../assets/webbed.png'
import badge5 from '../assets/7DayStreak.png'
import badge6 from '../assets/worldWideWeb.png'
import badge7 from '../assets/networkingNerd.png'
import badge8 from '../assets/pentestingPriciples.png'
import badge9 from '../assets/introToWebHacking.png'
import badge10 from '../assets/firstFour.png'

const Achievements = () => {
    return (
        <section id="achievements">
            <h2>Achievements</h2>
            <div id='thm-badge'>
                <img src="https://tryhackme-badges.s3.amazonaws.com/tfuent1.png?0" alt="TryHackMe" />
            </div>
            <Divider />
            <div id='certificates'>
                <img id='cert1' src={cert1} alt="Developing Front-End Apps with React" />
                <img id='cert2' src={cert2} alt="Python Basics" />
                <img id='cert3' src={cert3} alt="Introduction to Web Development with HTML, CSS, JavaScript" />
                <img id='cert4' src={cert4} alt='Getting Started with Git and GitHub' />
                <img id='cert5' src={cert5} alt='Introduction to Cloud Computing' />
            </div>
            <Divider />
            <div id='badges'>
                <img id='badge1' src={badge1} alt='Burped' />
                <img id='badge2' src={badge2} alt='cat linux.txt' />
                <img id='badge3' src={badge3} alt='Metasploitable' />
                <img id='badge4' src={badge4} alt='Webbed' />
                <img id='badge5' src={badge5} alt='7 Day Streak' />
                <img id='badge6' src={badge6} alt='World Wide Web' />
                <img id='badge7' src={badge7} alt='Networking Nerd' />
                <img id='badge8' src={badge8} alt='Pentesting Principles' />
                <img id='badge9' src={badge9} alt='Intro to Web Hacking' />
                <img id='badge10' src={badge10} alt='First Four' />
            </div>
            <Divider />
        </section>
    );
};

export default Achievements;