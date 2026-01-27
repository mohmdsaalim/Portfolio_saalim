import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SiGithub, SiGo, SiJavascript, SiTypescript, SiDocker, SiReact, SiTailwindcss, SiPostgresql, SiRedis, SiKubernetes, SiGin } from 'react-icons/si';

const techStack = [
    { name: 'Golang', icon: SiGo, level: 'CORE' },
    { name: 'Docker', icon: SiDocker, level: 'EXPERT' },
    { name: 'Postgres', icon: SiPostgresql, level: 'EXPERT' },
    { name: 'Redis', icon: SiRedis, level: 'ADVANCED' },
    { name: 'Gin', icon: SiGin, level: 'ADVANCED' },
    { name: 'React', icon: SiReact, level: 'INTERMEDIATE' },
    { name: 'TypeScript', icon: SiTypescript, level: 'CORE' },
    { name: 'K8s', icon: SiKubernetes, level: 'RESEARCH' },
];

const TechMarquee = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Map scroll progress (0 to 1) to horizontal translation (-20% to 20% or similar)
    const x = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <div ref={containerRef} className="w-full bg-black relative z-30 overflow-hidden">
            {/* Smooth Scroll-bound Marquee */}
            <div className="relative flex overflow-hidden border-y border-white/5 py-8">
                <motion.div
                    className="flex whitespace-nowrap"
                    style={{ x, willChange: 'transform' }}
                >
                    {/* Multiple sets for visibility during scroll */}
                    {[...techStack, ...techStack, ...techStack].map((tech, index) => (
                        <div key={index} className="flex flex-col items-center justify-center mx-12 md:mx-20 group">
                            <div className="text-white/50 group-hover:text-white/80 transition-colors">
                                <tech.icon size={64} />
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
