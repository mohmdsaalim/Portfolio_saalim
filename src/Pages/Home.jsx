import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import TechMarquee from '../components/TechMarquee';

const Home = () => {
    return (
        <main className="w-full relative bg-black">
            <Hero />
            <TechMarquee />
            <About />
        </main>
    );
};

export default Home;
