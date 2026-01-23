import React from 'react';
import { motion } from 'framer-motion';
import { SiGithub, SiGo, SiJavascript, SiTypescript, SiDocker, SiReact, SiTailwindcss, SiPostgresql, SiRedis, SiKubernetes } from 'react-icons/si';

const techStack = [
    { name: 'Golang', icon: SiGo, level: 'CORE' },
    { name: 'Docker', icon: SiDocker, level: 'EXPERT' },
    { name: 'Postgres', icon: SiPostgresql, level: 'EXPERT' },
    { name: 'Redis', icon: SiRedis, level: 'ADVANCED' },
    { name: 'Microservices', icon: SiGo, level: 'ADVANCED' },
    { name: 'React', icon: SiReact, level: 'INTERMEDIATE' },
    { name: 'TypeScript', icon: SiTypescript, level: 'CORE' },
    { name: 'K8s', icon: SiKubernetes, level: 'RESEARCH' },
];

const TechMarquee = () => {
    return (
        <div className="w-full bg-black pt-24 md:pt-32 relative z-30 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 mb-16">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-2 h-2 bg-white" />
                            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/40">Technical Dependencies</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-['Outfit'] font-black tracking-tighter uppercase">STACK_CAPABILITIES</h2>
                    </div>
                    <div className="font-mono text-[10px] text-white/20 uppercase tracking-widest text-right">
                        SYS.VERSION: 4.8.2-RELEASE <br />
                        ARCHITECTURE: DISTRIBUTED
                    </div>
                </div>
            </div>

            {/* Smooth Infinite Marquee */}
            <div className="relative flex overflow-hidden border-y border-white/5 py-12">
                <motion.div
                    className="flex whitespace-nowrap"
                    style={{ willChange: 'transform' }}
                    animate={{ x: [0, "-50%"] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear"
                        }
                    }}
                >
                    {/* Double the list for seamless loop */}
                    {[...techStack, ...techStack].map((tech, index) => (
                        <div key={index} className="flex flex-col items-center justify-center mx-12 md:mx-20 group">
                            <div className="text-white/20 group-hover:text-white/50 transition-colors mb-6">
                                <tech.icon size={48} />
                            </div>
                            <div className="text-center">
                                <div className="font-['Outfit'] text-[11px] font-bold text-white tracking-[0.2em] uppercase mb-1">{tech.name}</div>
                                <div className="font-mono text-[8px] text-white/20 group-hover:text-white/40 uppercase tracking-tighter transition-colors">
                                    {tech.level}
                                </div>
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
