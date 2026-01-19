import React from 'react';
import { Layers, ShieldCheck, Box, Database, Network, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import aboutImage from '../assets/about-me.JPEG';

const GoIcon = ({ size = 24, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M4.5 14c-.2-.5-.5-2.6.4-4.5a3.9 3.9 0 0 1 6.3-1.4" />
        <path d="M4.5 14h5v-3h-2" />
        <path d="M19.5 14c.2-.5.5-2.6-.4-4.5a3.9 3.9 0 0 0-6.3-1.4" />
        <path d="M19.5 14h-5v-3h2" />
    </svg>
);

const DataFlow = () => {
    // Generate a denser network of nodes
    const nodes = [
        { x: 10, y: 10 }, { x: 30, y: 15 }, { x: 50, y: 10 }, { x: 70, y: 15 }, { x: 90, y: 10 },
        { x: 20, y: 30 }, { x: 40, y: 35 }, { x: 60, y: 30 }, { x: 80, y: 35 }, { x: 15, y: 50 },
        { x: 35, y: 55 }, { x: 55, y: 50 }, { x: 75, y: 55 }, { x: 95, y: 50 }, { x: 25, y: 70 },
        { x: 45, y: 75 }, { x: 65, y: 70 }, { x: 85, y: 75 }, { x: 30, y: 90 }, { x: 70, y: 90 }
    ];

    // Create many connections for density
    const paths = [
        { from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 4 },
        { from: 0, to: 5 }, { from: 1, to: 6 }, { from: 2, to: 7 }, { from: 3, to: 8 }, { from: 4, to: 13 },
        { from: 5, to: 6 }, { from: 6, to: 7 }, { from: 7, to: 8 }, { from: 5, to: 9 }, { from: 6, to: 10 },
        { from: 7, to: 11 }, { from: 8, to: 12 }, { from: 9, to: 10 }, { from: 10, to: 11 }, { from: 11, to: 12 },
        { from: 12, to: 13 }, { from: 9, to: 14 }, { from: 10, to: 15 }, { from: 11, to: 16 }, { from: 12, to: 17 },
        { from: 14, to: 15 }, { from: 15, to: 16 }, { from: 16, to: 17 }, { from: 14, to: 18 }, { from: 17, to: 19 },
        { from: 15, to: 18 }, { from: 16, to: 19 }, { from: 6, to: 11 }, { from: 11, to: 15 }
    ];

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                    {/* Gradient Mask for fading both ends of the beam */}
                    <linearGradient id="beam-fade" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="white" stopOpacity="0" />
                        <stop offset="15%" stopColor="white" stopOpacity="1" />
                        <stop offset="85%" stopColor="white" stopOpacity="1" />
                        <stop offset="100%" stopColor="white" stopOpacity="0" />
                    </linearGradient>

                    <mask id="fade-mask">
                        <rect x="0" y="0" width="100%" height="100%" fill="url(#beam-fade)" />
                    </mask>

                    <filter id="glow-soft" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="1.2" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Static Network */}
                <g>
                    {paths.map((path, i) => (
                        <line
                            key={`line-${i}`}
                            x1={nodes[path.from].x}
                            y1={nodes[path.from].y}
                            x2={nodes[path.to].x}
                            y2={nodes[path.to].y}
                            stroke="white"
                            strokeWidth="0.05"
                            opacity="0.15"
                        />
                    ))}
                </g>

                {/* Animated "Blended Sticks" */}
                <g filter="url(#glow-soft)">
                    {paths.map((path, i) => {
                        const dx = nodes[path.to].x - nodes[path.from].x;
                        const dy = nodes[path.to].y - nodes[path.from].y;
                        const len = Math.sqrt(dx * dx + dy * dy);

                        return (
                            <motion.line
                                key={`beam-${i}`}
                                x1={nodes[path.from].x}
                                y1={nodes[path.from].y}
                                x2={nodes[path.to].x}
                                y2={nodes[path.to].y}
                                stroke="white"
                                strokeWidth="0.15" // Extremely thin
                                strokeLinecap="round"
                                strokeDasharray={`3 ${len + 30}`} // Short active segment (3 units)
                                strokeDashoffset={len + 30}
                                opacity="0.8"
                                animate={{
                                    strokeDashoffset: [len + 30, -30]
                                }}
                                transition={{
                                    duration: 1 + Math.random() * 2.5,
                                    repeat: Infinity,
                                    ease: "easeInOut", // Smoother entry/exit
                                    delay: Math.random() * 5,
                                    repeatDelay: Math.random() * 3
                                }}
                            />
                        );
                    })}
                </g>
            </svg>
        </div>
    );
};

const About = () => {
    return (
        <section id="about" className="w-full min-h-screen bg-black text-white flex flex-col md:flex-row relative z-20 overflow-hidden">

            {/* Left Column: Image Area (Fixed/Sticky feel on desktop) */}
            <div className="w-full md:w-1/2 h-[60vh] md:h-screen relative ">
                <div className="absolute inset-0 bg-black/10 z-10 transition-opacity duration-700 hover:opacity-0"></div>
                <img
                    src={aboutImage}
                    alt="Portrait"
                    className="w-full h-full object-cover grayscale contrast-103 brightness-90"
                />
                {/* Stylized Overlay Text */}
                <div className="absolute bottom-12 left-12 z-20">
                    {/* <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/60 mb-2">Portfolio 2026</p> */}
                    <div className="w-12 h-[1px] bg-white/60"></div>
                </div>
            </div>

            {/* Right Column: Content Area */}
            <div className="w-full md:w-1/2 flex flex-col relative bg-black border-l border-white/10">

                <DataFlow />

                {/* Massive Background Title - Reverted opacity/color, Smaller Size */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 select-none pointer-events-none opacity-5">
                    {/* <h1 className="text-[10rem] leading-none font-thin tracking-tighter whitespace-nowrap">ABOUT</h1> */}
                </div>

                <div className="flex-1 p-12 md:p-24 flex flex-col justify-center relative z-10">

                    {/* Header */}
                    <div className="mb-16">
                        <span className="block font-thin text-sm tracking-[0.4em] uppercase text-gray-500 mb-6 flex items-center gap-4">
                            <span className="w-8 h-[1px] bg-gray-700"></span>
                            The Developer
                        </span>
                        <h2 className="text-4xl md:text-6xl font-thin leading-[1.1]">
                            Engineer of <br />
                            <span className="font-extralight text-gray-400">Scalable Systems.</span>
                        </h2>
                    </div>

                    {/* Bio Paragraphs */}
                    <div className="space-y-8 mb-20 max-w-xl">
                        <p className="text-xl font-extralight text-gray-300 leading-relaxed">
                            I build scalable backend systems in Go, with a strong focus on gRPC microservices, performance optimization, and distributed system design.

                        </p>
                        {/* <p className="text-lg font-thin text-gray-400 leading-relaxed">
                            I engineer backend solutions that are clean, efficient, and built to scale in real production environments. My approach blends rigorous architectural discipline with modern efficiency.
                        </p> */}
                    </div>

                    {/* Minimalist Skills Grid - Swiss Style */}
                    <div>
                        <span className="block font-mono text-xs uppercase tracking-[0.2em] text-gray-600 mb-6">Expertise</span>
                        <div className="grid grid-cols-2 lg:grid-cols-3 border-t border-l border-white/10">
                            {[
                                { name: "Go Lang", icon: GoIcon },
                                { name: "Clean Arch", icon: Layers },
                                { name: "JWT Auth", icon: ShieldCheck },
                                { name: "Docker", icon: Box },
                                { name: "SQL", icon: Database },
                                { name: "Sys. dsgn", icon: Network }
                            ].map((skill, idx) => (
                                <div key={idx} className="group border-r border-b border-white/10 p-6 flex flex-col items-start hover:bg-white/5 transition-colors duration-300">
                                    <skill.icon size={20} className="text-gray-500 group-hover:text-white transition-colors mb-4 stroke-1" />
                                    <span className="font-thin text-sm uppercase tracking-wider text-gray-400 group-hover:text-white transition-colors">
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
