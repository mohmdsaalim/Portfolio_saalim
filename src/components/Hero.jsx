import React from 'react';
import { motion } from 'framer-motion';
import { ChevronsDown } from 'lucide-react';
import saalimMain from '../assets/Saalim_main.JPEG';

import SystemGraph from './SystemGraph';

const Hero = () => {
    return (
        <section id="home" className="w-full h-screen overflow-hidden relative">
            <img
                src={saalimMain}
                alt="Saalim Main"
                className="w-full h-full object-cover"
            />

            {/* Backend Architecture Visualization Layer */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                <SystemGraph className="w-full h-full pointer-events-auto" />
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
                <ChevronsDown size={32} />
            </motion.div>
        </section>
    );
};

export default Hero;
