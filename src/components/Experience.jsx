import React from 'react';

const experiences = [
    {
        company: "Bridgeon solutions",
        role: "Go developer intern",
        period: "2025 - Present",
        description: "Architecting high-throughput microservices handling 50k+ requests per second. Leading a team of 4 engineers in migrating legacy monoliths to Go-based services.",
        technologies: ["Go", "docker", "gRPC"]
    },
    // {
    //     company: "RapidScale Startup",
    //     role: "Software Engineer",
    //     period: "2021 - 2023",
    //     description: "Developed core payment processing infrastructure. Reduced payment latency by 40% through redis caching strategies and database optimizations.",
    //     technologies: ["Python", "PostgreSQL", "AWS"]
    // },
    // {
    //     company: "Open Source",
    //     role: "Core Contributor",
    //     period: "2020 - 2021",
    //     description: "Active contributor to high-profile distributed systems libraries. Improved consensus algorithm implementations and documentation.",
    //     technologies: ["Rust", "Distributed Systems"]
    // }
];

const ExperienceItem = ({ exp }) => (
    <div className="group relative border-l border-white/10 pl-8 pb-16 last:pb-0">
        {/* Timeline Dot */}
        <div className="absolute -left-[5px] top-2 w-[9px] h-[9px] bg-zinc-900 border border-zinc-600 rounded-full group-hover:bg-white group-hover:border-white transition-colors duration-300"></div>

        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
            <h3 className="text-xl font-light text-white group-hover:text-zinc-200 transition-colors">
                {exp.role}
            </h3>
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest mt-1 md:mt-0">
                {exp.period}
            </span>
        </div>

        <h4 className="text-sm font-medium text-zinc-400 mb-4 uppercase tracking-wide">
            {exp.company}
        </h4>

        <p className="text-zinc-400 font-light leading-relaxed mb-6 max-w-2xl">
            {exp.description}
        </p>

        <div className="flex flex-wrap gap-3">
            {exp.technologies.map((tech, idx) => (
                <span key={idx} className="text-xs font-mono text-zinc-600 border-b border-zinc-800 pb-0.5">
                    {tech}
                </span>
            ))}
        </div>
    </div>
);

const Experience = () => {
    return (
        <section id="experience" className="bg-black text-white py-16 px-6 md:px-24 border-t border-white/5 relative z-10">
            <div className="flex flex-col md:flex-row gap-16 md:gap-32">
                {/* Section Header */}
                <div className="md:w-1/3">
                    <span className="block font-mono text-xs uppercase tracking-[0.4em] text-zinc-600 mb-6 flex items-center gap-4">
                        <span className="w-8 h-[1px] bg-zinc-800"></span>
                        History
                    </span>
                    <h2 className="text-5xl font-thin tracking-tight text-white mb-8">
                        Experience
                    </h2>
                    <p className="text-zinc-500 font-light leading-relaxed text-sm max-w-xs">
                        A clear timeline of professional growth and technical leadership in challenging environments.
                    </p>
                </div>

                {/* Experience List */}
                <div className="md:w-2/3">
                    <div className="border-l-0">
                        {experiences.map((exp, index) => (
                            <ExperienceItem key={index} exp={exp} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
