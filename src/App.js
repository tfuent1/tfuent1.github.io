import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import photo from './assets/Engagement1.jpg'


const App = () => {
    return (
        <div className="App">
            <Header />
            <div id='AboutDiv'>
                <About />
                <div id='image'>
                    <img id='headshot' src={photo} alt='Photo' />
                </div>
            </div>
            <Projects />
            <Achievements />
            <Contact />
            <footer>
                <p id='copyright'>&copy; 2024 Thomas Fuentes</p>
            </footer>
        </div>
    );
};

export default App;
