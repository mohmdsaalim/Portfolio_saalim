import React from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: "E-Commerce Platform",
        description: "A high-performance e-commerce solution built with Next.js and Go microservices. Features real-time inventory management and stripe integration.",
        tags: ["Next.js", "Go", "gRPC", "PostgreSQL"],
        link: "#",
        github: "#"
    },
    {
        title: "Distributed Task Queue",
        description: "A robust distributed task queue system handling millions of jobs per hour. Built for scalability and fault tolerance.",
        tags: ["Go", "Redis", "Docker", "Kubernetes"],
        link: "#",
        github: "#"
    },
    {
        title: "Fintech Dashboard",
        description: "Real-time financial analytics dashboard with intuitive data visualization and secure authentication patterns.",
        tags: ["React", "TypeScript", "D3.js", "Node.js"],
        link: "#",
        github: "#"
    },
    {
        title: "AI Chat Interface",
        description: "Minimalist chat interface for LLM interaction, focusing on typography and latency optimization.",
        tags: ["Svelte", "FastAPI", "WebSockets"],
        link: "#",
        github: "#"
    }
];

const ProjectCard = ({ project }) => (
    <div className="group relative p-8 bg-zinc-900/30 transition-colors duration-300 flex flex-col h-full">
        {/* Hover accent */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

        <div className="flex justify-between items-start mb-6">
            <h3 className="text-2xl font-light text-white  transition-colors">
                {project.title}
            </h3>
            <div className="flex gap-4">
                <a href={project.github} className="text-zinc-500 hover:text-white transition-colors">
                    <Github size={20} strokeWidth={1} />
                </a>
                <a href={project.link} className="text-zinc-500 hover:text-white transition-colors">
                    <ArrowUpRight size={20} strokeWidth={1} />
                </a>
            </div>
        </div>

        <p className="text-zinc-400 font-light leading-relaxed mb-8 flex-1">
            {project.description}
        </p>

        <div className="flex flex-wrap gap-3 mt-auto">
            {project.tags.map((tag, idx) => (
                <span key={idx} className="text-xs font-mono uppercase tracking-wider text-zinc-600 border border-zinc-800 px-3 py-1 bg-zinc-900/50">
                    {tag}
                </span>
            ))}
        </div>
    </div>
);

const Projects = () => {
    return (
        <section id="projects" className="min-h-screen bg-black text-white py-16 px-6 md:px-24 border-t border-white/5 relative z-10">
            {/* Header */}
            <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div>
                    <span className="block font-mono text-xs uppercase tracking-[0.4em] text-zinc-600 mb-6 flex items-center gap-4">
                        <span className="w-8 h-[1px] bg-zinc-800"></span>
                        Selected Works
                    </span>
                    <h2 className="text-5xl md:text-7xl font-thin tracking-tight text-white">
                        Project <span className="text-zinc-700">Index</span>
                    </h2>
                </div>
                <div className="max-w-md">
                    <p className="text-zinc-500 font-light leading-relaxed text-sm">
                        A collection of technical endeavors focused on scalability, performance, and clean architecture.
                    </p>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-900/30 border border-white/5">
                {/* Using gap-px with a background color creates a grid border effect if items have bg */}
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
