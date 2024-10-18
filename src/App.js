import React from 'react';
import './App.css';

// Importing Components
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Timeline from './components/Timeline';

import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
    return (
        <div className="App">
            <Header />
            <Hero />
            <Portfolio />
            <Skills />
            <Timeline />
            
            <News />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
