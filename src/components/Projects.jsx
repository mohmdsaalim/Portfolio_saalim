import React, { useRef } from 'react';
import { ExternalLink, Github, ArrowUpRight, Code2, Database, Share2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: "01",
        title: "E-Commerce Microservices",
        category: "Cloud Architecture",
        description: "High-concurrency e-commerce core handling 50k+ req/sec. Built with Go, gRPC, and PostgreSQL.",
        tech: ["Go", "gRPC", "Postgres", "Redis"],
        github: "#",
        year: "2025",
        stats: { perf: "50k req/s", uptime: "99.99%" }
    },
    {
        id: "02",
        title: "Distributed Scheduler",
        category: "Infrastructure",
        description: "A fault-tolerant task orchestration engine with millisecond precision and zero-downtime deployments.",
        tech: ["Go", "Kafka", "K8s", "Docker"],
        github: "#",
        year: "2024",
        stats: { perf: "<1ms Latency", uptime: "Zero DT" }
    },
    {
        id: "03",
        title: "Fintech Core Engine",
        category: "Backend Systems",
        description: "Double-entry bookkeeping system with transaction isolation levels and multi-currency support.",
        tech: ["Go", "Event-Sourcing", "CockroachDB"],
        github: "#",
        year: "2024",
        stats: { perf: "ACID Compliant", uptime: "100%" }
    },
    {
        id: "04",
        title: "Auth & Identity Provider",
        category: "Security",
        description: "A custom OAuth2/OIDC provider with RBAC, hardware security modules, and biometric integration.",
        tech: ["Vault", "JWT", "Golang", "LDAP"],
        github: "#",
        year: "2023",
        stats: { perf: "OIDC/OAuth2", uptime: "Secure" }
    }
];

const ProjectCard = ({ project, index, total }) => {
    return (
        <div className="project-card absolute top-0 w-full h-full flex flex-col justify-center items-center p-4 md:p-8"
            style={{ zIndex: index + 1 }}>

            <div className="w-full max-w-[1000px] bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden relative shadow-2xl">
                {/* Card decorative header */}
                <div className="h-8 md:h-12 bg-white/[0.03] border-b border-white/5 flex items-center justify-between px-4 md:px-6">
                    <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500/20 md:bg-red-500/50" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500/20 md:bg-yellow-500/50" />
                        <div className="w-2 h-2 rounded-full bg-green-500/20 md:bg-green-500/50" />
                    </div>
                    <div className="font-mono text-[9px] md:text-[10px] text-white/30 uppercase tracking-widest flex items-center gap-2">
                        <span className="hidden sm:inline">Project_Hash:</span> 0x{project.id}_{project.year}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 md:max-h-[60vh] overflow-y-auto lg:overflow-visible">
                    {/* Left Content */}
                    <div className="lg:col-span-7 p-6 md:p-10 md:py-16 flex flex-col justify-between min-h-[400px] border-b lg:border-b-0 lg:border-r border-white/5 relative">
                        <div className="absolute top-0 left-0 w-[1px] h-20 bg-gradient-to-b from-white/20 to-transparent" />

                        <div className="space-y-6 md:space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-white/10 rounded-full w-fit">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500/80 animate-pulse" />
                                <span className="font-mono text-[10px] text-white/60 uppercase tracking-wider">{project.category}</span>
                            </div>

                            <h3 className="text-4xl md:text-5xl lg:text-7xl font-['Outfit'] font-black text-white leading-[0.85] tracking-tighter uppercase relative z-10">
                                {project.title}
                            </h3>

                            <p className="text-white/50 text-base md:text-lg font-light leading-relaxed max-w-md">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 md:gap-3">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="px-3 py-1.5 bg-white/[0.02] border border-white/10 text-white/40 font-mono text-xs uppercase tracking-wider hover:bg-white/5 transition-colors cursor-default">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center gap-6 mt-12">
                            <a href={project.github} className="group relative px-6 py-3 bg-white text-black font-['Outfit'] font-bold uppercase tracking-widest text-xs overflow-hidden">
                                <span className="relative z-10 flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                                    View Source <Github size={14} />
                                </span>
                                <div className="absolute inset-0 bg-white group-hover:bg-gray-200 transition-colors" />
                            </a>
                        </div>
                    </div>

                    {/* Right Stats/Visuals */}
                    <div className="lg:col-span-5 p-6 md:p-10 bg-white/[0.01] relative flex flex-col justify-center">
                        <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-[0.05]"
                            style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                        <div className="relative z-10 space-y-12">
                            <div className="space-y-4">
                                <div className="flex items-end justify-between border-b border-white/10 pb-2">
                                    <span className="font-mono text-xs text-white/40 uppercase">Performance</span>
                                    <span className="font-mono text-xl text-green-400">{project.stats.perf}</span>
                                </div>
                                <div className="flex items-end justify-between border-b border-white/10 pb-2">
                                    <span className="font-mono text-xs text-white/40 uppercase">Reliability</span>
                                    <span className="font-mono text-xl text-blue-400">{project.stats.uptime}</span>
                                </div>
                            </div>

                            <div className="aspect-video bg-black/50 border border-white/10 rounded-lg flex items-center justify-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                                <Code2 size={48} className="text-white/20 group-hover:text-white/40 transition-colors duration-500 group-hover:scale-110 transform" />

                                <div className="absolute bottom-2 right-2 font-mono text-[9px] text-white/20">
                                    SYS_VISUALIZATION_NA
                                </div>
                            </div>
                        </div>

                        {/* Pagination */}
                        <div className="absolute top-6 right-6 font-mono text-4xl md:text-6xl font-black text-white/[0.03] select-none">
                            {project.id}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const containerRef = useRef(null);
    const triggerRef = useRef(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray('.project-card');

        const animation = gsap.timeline({
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top top",
                end: `+=${cards.length * 100}%`,
                scrub: 1,
                pin: true,
                anticipatePin: 1,
            }
        });

        cards.forEach((card, i) => {
            if (i === 0) return; // Skip first card (it's already there)

            // Initial state for next cards
            gsap.set(card, {
                yPercent: 100,
                opacity: 0,
                scale: 0.8
            });

            animation.to(card, {
                yPercent: 0,
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: "power2.out",
            }, i - 0.5); // Overlap animations

            // Animate previous card out slightly
            animation.to(cards[i - 1], {
                scale: 0.95,
                opacity: 0.5,
                filter: "blur(5px)",
                duration: 1,
            }, i - 0.5);
        });

    }, { scope: containerRef });

    return (
        <section ref={containerRef} id="projects" className="bg-black text-white relative z-10 w-full">
            <div ref={triggerRef} className="h-screen w-full flex items-center justify-center relative overflow-hidden">

                {/* Background Context */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <h2 className="text-[20vw] font-['Outfit'] font-black text-white/[0.02] leading-none uppercase tracking-tighter">
                        PROJECTS
                    </h2>
                </div>

                <div className="absolute top-8 left-8 md:top-12 md:left-12 z-20 mix-blend-difference">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-white flex-shrink-0" />
                        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/60">PROJECTS</span>
                    </div>
                </div>

                <div className="relative w-full h-full max-w-[1600px] mx-auto flex items-center justify-center">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            index={index}
                            total={projects.length}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

