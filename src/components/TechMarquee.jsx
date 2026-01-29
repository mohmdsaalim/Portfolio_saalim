import React from 'react';
import { motion } from 'framer-motion';
import {
    SiGithub, SiGo, SiJavascript, SiDocker,
    SiReact, SiPostgresql, SiRedis,
    SiGin, SiGit, SiJsonwebtokens
} from 'react-icons/si';

const techStack = [
    { name: 'Golang', icon: SiGo },
    { name: 'Fiber', icon: SiReact }, // SiGofiber is not available in some react-icons versions, using SiGo as fallback
    { name: 'GORM', icon: SiGin },
    { name: 'Docker', icon: SiDocker },
    { name: 'Postgres', icon: SiPostgresql },
    { name: 'Redis', icon: SiRedis },
    { name: 'Git', icon: SiGit },
    { name: 'JWT', icon: SiJsonwebtokens },
    { name: 'TypeScript', icon: SiJavascript },
    { name: 'K8s', icon: SiGithub },
];

const TechMarquee = () => {
    return (
        <div className="w-full bg-black relative z-30 overflow-hidden pt-10">
            {/* Section Header */}
            <div className="flex justify-center mb-4">
                <div className="flex items-center gap-4">
                    <div className="h-[1px] w-8 bg-blue-500/30" />
                    <span className="font-mono text-[7px] tracking-[0.5em] text-white/30 uppercase">
                        Core_Engine_Infrastructure_v3.02
                    </span>
                    <div className="h-[1px] w-8 bg-blue-500/30" />
                </div>
            </div>

            {/* Continuous Automatic Marquee */}
            <div className="relative flex overflow-hidden border-y border-white/5 py-6">
                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{ x: [0, -1250] }} // Adjusted for current stack count
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 35,
                            ease: "linear",
                        },
                    }}
                    style={{ willChange: 'transform' }}
                >
                    {/* Double the stack for seamless looping */}
                    {[...techStack, ...techStack].map((tech, index) => (
                        <div key={index} className="flex flex-col items-center justify-center mx-10 md:mx-14 group">
                            <div className="text-white/70 group-hover:text-white/90 transition-colors">
                                <tech.icon size={48} />
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Gradient Fades for Smoothness */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
            </div>
        </div>
    );
};

export default TechMarquee;
