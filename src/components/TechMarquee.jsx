import React from 'react';
import { motion } from 'framer-motion';
import { SiGithub, SiGo, SiJavascript, SiTypescript, SiDocker, SiReact, SiTailwindcss } from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa';

const techStack = [
    { name: 'Git', icon: FaGitAlt },
    { name: 'Go Lang', icon: SiGo },
    { name: 'GitHub', icon: SiGithub },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'Fiber', icon: SiGo },  // Using Go icon for framework representation
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Docker', icon: SiDocker },
    { name: 'React', icon: SiReact },
    { name: 'Go Gin', icon: SiGo }, // Using Go icon for framework representation
    { name: 'Tailwind', icon: SiTailwindcss },
];

const TechMarquee = () => {
    return (
        <div className="w-full bg-black py-10 border-y  overflow-hidden relative z-30">
            <div className="flex">
                <motion.div
                    className="flex items-center space-x-16 whitespace-nowrap"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20,
                            ease: "linear",
                        },
                    }}
                >
                    {/* Double the list for seamless looping */}
                    {[...techStack, ...techStack, ...techStack].map((tech, index) => (
                        <div key={index} className="flex items-center space-x-3 opacity-60 hover:opacity-100 transition-opacity duration-300">
                            <tech.icon className="text-2xl text-white" />
                            <span className="text-xl font-thin tracking-widest text-gray-300 uppercase">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default TechMarquee;
