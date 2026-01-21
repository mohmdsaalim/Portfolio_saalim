import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import TechMarquee from '../components/TechMarquee';
import Projects from '../components/Projects';
import ScrollingQuote from '../components/ScrollingQuote';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <main className="w-full relative bg-black">
            <Hero />
            <TechMarquee />
            <About />
            <Projects />
            <ScrollingQuote />
            <Experience />
            <Contact />
        </main>
    );
};

export default Home;
