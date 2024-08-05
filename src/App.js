import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import photo from './assets/Engagement1.jpg'

const App = () => {
    return (
        <div className="App">
            <Header />
            <div id='AboutDiv'>
                <About />
                <img src={photo} alt='Photo' />
            </div>
            <Projects />
            <Contact />
            <footer>
                <p>&copy; 2024 Thomas Fuentes</p>
            </footer>
        </div>
    );
};

export default App;
