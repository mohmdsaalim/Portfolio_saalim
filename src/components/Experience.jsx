import React from 'react';

const experiences = [
    {
        id: "ENV_01",
        company: "Bridgeon solutions",
        role: "Go developer intern",
        period: "JAN 2025 / PRESENT",
        location: "REMOTE / HYBRID",
        description: "Architecting high-throughput microservices handling 50k+ requests per second. Leading a team of 4 engineers in migrating legacy monoliths to Go-based services. Focus on gRPC communication and observability.",
        technologies: ["Go", "Docker", "gRPC", "gin", "postgres"]
    },
    // {
    //     id: "ENV_02",
    //     company: "Alpha Systems",
    //     role: "Backend Research",
    //     period: "JUN 2024 / DEC 2024",
    //     location: "ONSITE / KOCHI",
    //     description: "Developed distributed cache synchronization mechanisms for multi-region deployments. Performance tuning of SQL queries and indexing strategies.",
    //     technologies: ["SQL", "Redis", "Kafka", "PostgreSQL"]
    // },
    // {
    //     id: "ENV_03",
    //     company: "Open Source Collective",
    //     role: "Core Contributor",
    //     period: "2023 / 2024",
    //     location: "GLOBAL",
    //     description: "Actively contributed to Go-based networking libraries. Optimized packet parsing logic resulting in 15% reduction in CPU overhead.",
    //     technologies: ["Golang", "Wasm", "Protobuf"]
    // }
];

const SectionLabel = ({ children }) => (
    <div className="flex items-center gap-3 mb-12">
        <div className="w-2 h-2 bg-white flex-shrink-0" />
        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/40">{children}</span>
        <div className="h-[1px] flex-1 bg-white/10" />
    </div>
);

const LogEntry = ({ exp }) => (
    <div className="group relative border-l border-white/5 pl-8 md:pl-16 pb-24 last:pb-8">
        {/* Node point */}
        <div className="absolute -left-[3px] top-0 w-[5px] h-[5px] bg-white opacity-20 group-hover:opacity-100 transition-opacity" />

        <div className="flex flex-col md:grid md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
                <div className="font-mono text-[11px] text-white/40 mb-2">{exp.id}</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-white/80">{exp.period}</div>
                <div className="font-mono text-[9px] text-white/20 mt-1 uppercase">{exp.location}</div>
            </div>

            <div className="md:col-span-9">
                <div className="mb-6">
                    <h3 className="text-3xl lg:text-4xl font-['Outfit'] font-black tracking-tighter uppercase leading-none mb-2">
                        {exp.role}
                    </h3>
                    <h4 className="font-mono text-xs text-white/40 uppercase tracking-[0.2em]">{exp.company}</h4>
                </div>

                <p className="font-['Outfit'] font-light text-white/60 leading-relaxed max-w-2xl mb-8">
                    {exp.description}
                </p>

                <div className="flex flex-wrap gap-4">
                    {exp.technologies.map((tech, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-white/20" />
                            <span className="font-mono text-[9px] text-white/40 uppercase tracking-widest group-hover:text-white/60 transition-colors">
                                {tech}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

const Experience = () => {
    return (
        <section id="experience" className="bg-black text-white py-24 md:py-32 px-6 md:px-12 lg:px-24 border-t border-white/5 relative z-10 overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

                    <div className="lg:col-span-4">
                        <SectionLabel>Professional Trajectory</SectionLabel>
                        <h2 className="text-6xl md:text-8xl font-['Outfit'] font-black tracking-tighter uppercase leading-[0.8] mb-12">
                            SYSTEMS <br />
                            <span className="text-white/10">HISTORY</span>.
                        </h2>
                        <div className="font-mono text-[10px] text-white/30 uppercase tracking-[0.3em] leading-loose">
                            DEPLOY_LOG_V2.0 <br />
                            TRACKING_SEQUENTIAL_GROWTH <br />
                            STATUS: ACTIVE
                        </div>
                    </div>

                    <div className="lg:col-span-8">
                        <div className="mt-4">
                            {experiences.map((exp, index) => (
                                <LogEntry key={index} exp={exp} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/[0.02] -z-10" />
            <div className="absolute top-0 right-1/4 w-[1px] h-full bg-white/[0.02] -z-10" />
        </section>
    );
};

export default Experience;
