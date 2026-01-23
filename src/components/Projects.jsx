import React from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
    {
        id: "01",
        title: "E-Commerce Microservices",
        category: "Cloud Architecture",
        description: "High-concurrency e-commerce core handling 50k+ req/sec. Built with Go, gRPC, and PostgreSQL.",
        tech: ["Go", "gRPC", "Postgres", "Redis"],
        github: "#",
        year: "2025"
    },
    {
        id: "02",
        title: "Distributed Scheduler",
        category: "Infrastructure",
        description: "A fault-tolerant task orchestration engine with millisecond precision and zero-downtime deployments.",
        tech: ["Go", "Kafka", "K8s", "Docker"],
        github: "#",
        year: "2024"
    },
    {
        id: "03",
        title: "Fintech Core Engine",
        category: "Backend Systems",
        description: "Double-entry bookkeeping system with transaction isolation levels and multi-currency support.",
        tech: ["Go", "Event-Sourcing", "CockroachDB"],
        github: "#",
        year: "2024"
    },
    {
        id: "04",
        title: "Auth & Identity Provider",
        category: "Security",
        description: "A custom OAuth2/OIDC provider with RBAC, hardware security modules, and biometric integration.",
        tech: ["Vault", "JWT", "Golang", "LDAP"],
        github: "#",
        year: "2023"
    }
];

const SectionLabel = ({ children }) => (
    <div className="flex items-center gap-3 mb-12">
        <div className="w-2 h-2 bg-white flex-shrink-0" />
        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/40">{children}</span>
        <div className="h-[1px] flex-1 bg-white/10" />
    </div>
);

const ProjectRow = ({ project }) => (
    <div className="group border-b border-white/10 py-12 flex flex-col lg:grid lg:grid-cols-12 gap-8 items-start transition-all hover:bg-white/[0.02]">
        <div className="lg:col-span-1">
            <span className="font-mono text-[11px] text-white/30 group-hover:text-white transition-colors">[{project.id}]</span>
        </div>

        <div className="lg:col-span-4">
            <h3 className="text-3xl lg:text-5xl font-['Outfit'] font-black tracking-tighter uppercase leading-none mb-4 group-hover:pl-4 transition-all">
                {project.title}
            </h3>
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/20 group-hover:text-white/40">
                {project.category} / {project.year}
            </span>
        </div>

        <div className="lg:col-span-4">
            <p className="font-['Outfit'] text-sm text-white/50 leading-relaxed max-w-sm">
                {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
                {project.tech.map((t, i) => (
                    <span key={i} className="font-mono text-[9px] text-white/30 border border-white/10 px-2 py-0.5 rounded-full uppercase">
                        {t}
                    </span>
                ))}
            </div>
        </div>

        <div className="lg:col-span-3 flex justify-end gap-12 w-full lg:w-auto mt-4 lg:mt-0">
            <a href={project.github} className="flex items-center gap-2 group/link">
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/40 group-hover/link:text-white transition-colors">Source_Code</span>
                <Github size={14} className="text-white/20 group-hover/link:text-white" />
            </a>
            <a href="#" className="flex items-center gap-2 group/link">
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/40 group-hover/link:text-white transition-colors">Documentation</span>
                <ArrowUpRight size={14} className="text-white/20 group-hover/link:text-white" />
            </a>
        </div>
    </div>
);

const Projects = () => {
    return (
        <section id="projects" className="min-h-screen bg-black text-white pt-12 md:pt-16 pb-24 md:pb-32 px-6 md:px-12 lg:px-24 border-t border-white/5 relative z-10 overflow-hidden">
            {/* Massive side text */}
            <div className="absolute top-0 right-10 flex flex-col pointer-events-none select-none h-full justify-center opacity-[0.03]">
                <span className="font-['Outfit'] text-[15vw] font-black vertical-text rotate-180 leading-none">PROJECTS</span>
            </div>

            <div className="max-w-[1400px] mx-auto relative">
                <div className="mb-32">
                    <SectionLabel>Selected Work Architecture</SectionLabel>
                    <h2 className="text-6xl md:text-9xl font-['Outfit'] font-black tracking-tighter uppercase leading-[0.8] mb-8">
                        THE <br />
                        BUILD <span className="text-white/10">INDEX</span>.
                    </h2>
                    <p className="max-w-xl font-['Outfit'] font-light text-white/40 text-lg leading-relaxed">
                        A systematic record of technical developments. Each entry represents a unique architectural challenge resolved through rigorous engineering.
                    </p>
                </div>

                <div className="border-t border-white/10">
                    {projects.map((project, index) => (
                        <ProjectRow key={index} project={project} />
                    ))}
                </div>

                <div className="mt-24 flex justify-between items-center border-t border-white/10 pt-8">
                    <div className="font-mono text-[10px] text-white/20 uppercase tracking-[0.2em]">
                        Total Computed Assets: 04_Primary
                    </div>
                    <div className="font-mono text-[10px] text-white/20 uppercase tracking-[0.2em]">
                        Last Update: Jan_2026
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
