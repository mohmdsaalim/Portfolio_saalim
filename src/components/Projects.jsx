import React, { useState, useEffect } from 'react';
import {
    Github, ArrowUpRight, Layers, Globe, Terminal,
    Hash, Crosshair, Box, Settings, Cpu, Activity,
    Database, Network, Shield, Workflow, Fingerprint
} from 'lucide-react';

const MicroDetail = ({ text, className = "" }) => (
    <span className={`font-mono text-[6px] tracking-[0.2em] text-white/30 uppercase select-none ${className}`}>
        {text}
    </span>
);

const CornerBracket = ({ position = "tl" }) => {
    const classes = {
        tl: "top-0 left-0 border-t border-l",
        tr: "top-0 right-0 border-t border-r",
        bl: "bottom-0 left-0 border-b border-l",
        br: "bottom-0 right-0 border-b border-r"
    };
    return <div className={`absolute w-1 h-1 border-white/20 ${classes[position]}`} />;
};

const ProjectMetric = ({ label, value, sub, id }) => (
    <div className="border-r border-white/20 bg-white/[0.02] p-5 flex flex-col justify-between h-26 relative">
        <div className="flex justify-between items-start">
            <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/40">{label}</span>
            <MicroDetail text={`0x${id}`} />
        </div>
        <div>
            <div className="text-2xl font-['Outfit'] font-black text-neutral-200 tracking-tighter">{value}</div>
            <div className="font-mono text-[6px] uppercase tracking-[0.3em] text-blue-500/60 mt-1">{sub}</div>
        </div>
    </div>
);

const SourceCodeButton = ({ url }) => {
    const [showIcon, setShowIcon] = useState(false);

    useEffect(() => {
        const cycle = () => {
            // After 5 seconds, show icon
            const showTimer = setTimeout(() => {
                setShowIcon(true);
                // After 2 more seconds, show text again
                const hideTimer = setTimeout(() => {
                    setShowIcon(false);
                }, 2000);
                return () => clearTimeout(hideTimer);
            }, 5000);

            return showTimer;
        };

        const timer = cycle();
        const interval = setInterval(() => {
            cycle();
        }, 7000); // 5s text + 2s icon

        return () => {
            clearTimeout(timer);
            clearInterval(interval);
        };
    }, []);

    return (
        <a
            href={url}
            className="relative inline-flex items-center justify-center w-[160px] h-[48px] border border-white/20 text-white font-['Outfit'] font-black uppercase tracking-tighter text-[11px] overflow-hidden"
        >
            <span className={`relative z-20 transition-all duration-300 ${showIcon ? 'opacity-0 translate-y-[-10px]' : 'opacity-100 translate-y-0'}`}>
                Source_Code
            </span>
            <div className={`absolute inset-0 z-10 flex items-center justify-center bg-black transition-all duration-300 ${showIcon ? 'translate-y-0' : 'translate-y-full'}`}>
                <Github size={20} className="text-white" />
            </div>
        </a>
    );
};

const projects = [
    {
        id: "01",
        title: "E-Commerce Microservices",
        category: "Cloud Architecture",
        description: "High-concurrency core system handling 50k+ req/sec. Implemented with Go/gRPC for performance, with a robust PostgreSQL layer.",
        tech: ["Go", "gRPC", "Postgres", "Redis"],
        github: "#",
        live: "#",
        year: "2025",
        metrics: [{ label: "Throughput", value: "50k/s" }, { label: "Latency", value: "<15ms" }, { label: "Stability", value: "99.9%" }],
        features: ["Tracing", "Auto-scaling", "Caching"],
        sysId: "X81_CORE"
    },

   {
  id: "02",
  title: "In-Memory Task Scheduler",
  category: "Backend Systems",
  description: "Asynchronous task scheduling engine supporting delayed execution. Designed using Go concurrency primitives with channel-based orchestration.",
  tech: ["Go", "Goroutines", "Channels", "REST API"],
  github: "https://github.com/yourname/task-scheduler",
  live: "Localhost / CLI",
  year: "2025",
  metrics: [
    { label: "Latency", value: "<1ms enqueue" },
    { label: "Tasks", value: "100K+" },
    { label: "Concurrency", value: "Race-free" }
  ],
  features: [
    "Delayed execution",
    "Ordered scheduling",
    "Async workers",
    "Channel-based design"
  ],
  sysId: "TSCHED_GO_01"
},
    {
        id: "03",
        title: "Fintech Core Engine",
        category: "Backend Systems",
        description: "Double-entry bookkeeping with ACID compliance. Integrated multi-currency and event-sourcing for traceability.",
        tech: ["Go", "Event", "Cockroach", "Rabbit"],
        github: "#",
        live: "#",
        year: "2024",
        metrics: [{ label: "Compliance", value: "ACID" }, { label: "Scalability", value: "Horiz" }, { label: "Audit", value: "Real" }],
        features: ["Ledger", "Isolation", "Currency"],
        sysId: "Z04_FIN"
    },
    {
        id: "04",
        title: "Identity Provider",
        category: "Security Service",
        description: "Custom OAuth2/OIDC provider for enterprise security. Features include RBAC and biometric authentication hooks.",
        tech: ["Vault", "JWT", "Go", "OAuth2"],
        github: "#",
        live: "#",
        year: "2023",
        metrics: [{ label: "Security", value: "HSM" }, { label: "Standard", value: "OIDC" }, { label: "Isolation", value: "Sandbox" }],
        features: ["RBAC", "Biometrics", "HSM"],
        sysId: "W99_AUTH"
    }
];

const Projects = () => {
    const [activeId, setActiveId] = useState(projects[0].id);
    const activeProject = projects.find(p => p.id === activeId);

    return (
        <section id="projects" className="min-h-screen bg-black text-white pt-10 pb-14 px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '25px 25px' }} />

            <div className="max-w-[1320px] w-full relative z-10">
                <div className="flex items-center justify-between mb-3 px-1">
                    <div className="flex items-center gap-5">
                        <div className="flex items-center gap-2">
                            <Crosshair size={9} className="text-blue-500/40" />
                            <MicroDetail text="MODULE / SYSTEMS / PROJECTS.HEX" />
                        </div>
                        <div className="h-[1px] w-10 bg-white/10" />
                        <MicroDetail text="STABLE_V1" />
                    </div>
                    <div className="flex items-center gap-4">
                        <MicroDetail text="ASSETS: 04" />
                        <div className="flex gap-1">
                            {[1, 2].map(i => <div key={i} className="w-1 h-1 bg-white/10 border border-white/20" />)}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-white/10 bg-[#050505] shadow-2xl">
                    {/* Project Selector Block */}
                    <div className="lg:col-span-3 border-r border-white/10 p-0 flex flex-col bg-white/[0.01] relative">
                        <CornerBracket position="tl" />
                        <CornerBracket position="bl" />
                        <div className="p-8 border-b border-white/10 bg-white/[0.02]">
                            <div className="flex items-center gap-2 mb-5">
                                <Box size={14} className="text-blue-500/50" />
                                <MicroDetail text="ENTITY_NAV" />
                            </div>
                            <h2 className="text-3xl font-['Outfit'] font-black tracking-tighter uppercase leading-none text-neutral-200">
                                Entity <br /> <span className="text-white/20">Library</span>
                            </h2>
                        </div>
                        <div className="flex-1">
                            {projects.map((project) => (
                                <button
                                    key={project.id}
                                    onClick={() => setActiveId(project.id)}
                                    className={`w-full text-left p-6 border-b border-white/5 relative transition-none ${activeId === project.id ? 'bg-white/[0.04] opacity-100 font-bold' : 'opacity-20 grayscale border-l-transparent'
                                        }`}
                                >
                                    {activeId === project.id && <div className="absolute left-0 top-0 h-full w-1 bg-blue-500" />}
                                    <div className="flex justify-between items-start mb-1">
                                        <MicroDetail text={`REF_0X${project.id}`} />
                                        <MicroDetail text={project.year} />
                                    </div>
                                    <h3 className="text-lg font-['Outfit'] font-bold tracking-tight uppercase leading-tight">{project.title}</h3>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Content Detail Block */}
                    <div className="lg:col-span-9 flex flex-col relative bg-black">
                        <div className="p-10 lg:p-12 flex-1 relative border-b border-white/10">
                            <CornerBracket position="tr" />
                            <div className="max-w-xl">
                                <div className="mb-10">
                                    <div className="flex items-center gap-2 mb-5">
                                        <Hash size={8} className="text-white/20" />
                                        <MicroDetail text={`ENTITY // ID_${activeProject.sysId}`} />
                                    </div>
                                    <h3 className="text-5xl font-['Outfit'] font-black tracking-tighter uppercase leading-[0.9] mb-6 text-neutral-200">
                                        {activeProject.title.split(' ')[0]} <br />
                                        <span className="text-transparent border-text text-white/10" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
                                            {activeProject.title.split(' ').slice(1).join(' ')}
                                        </span>
                                    </h3>
                                    <p className="text-sm font-['Outfit'] font-light text-white/70 leading-relaxed border-l border-blue-500/40 pl-5 mb-8">
                                        {activeProject.description}
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-10">
                                    <div className="space-y-5">
                                        <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/20 flex items-center gap-2">
                                            <Settings size={11} className="text-blue-500/30" /> Capabilities
                                        </h4>
                                        <ul className="space-y-2.5">
                                            {activeProject.features.map((f, i) => (
                                                <li key={i} className="flex items-center gap-2.5">
                                                    <div className="w-1 h-1 bg-white/40" />
                                                    <span className="font-['Outfit'] text-[11px] text-white/60 uppercase tracking-widest">{f}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="space-y-5">
                                        <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/20 flex items-center gap-2">
                                            <Terminal size={11} className="text-blue-500/30" /> Architecture
                                        </h4>
                                        <div className="flex flex-wrap gap-1.5">
                                            {activeProject.tech.map((t, i) => (
                                                <span key={i} className="px-2.5 py-0.5 border border-white/10 font-mono text-[8px] text-white/30 uppercase tracking-widest">{t}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-12">
                                    <SourceCodeButton url={activeProject.github} />
                                </div>
                            </div>
                        </div>

                        {/* Integrated Metrics Column */}
                        <div className="grid grid-cols-3 bg-[#080808]">
                            {activeProject.metrics.map((m, i) => (
                                <ProjectMetric key={i} label={m.label} value={m.value} sub={m.label.toUpperCase()} id={`${activeId}${i}`} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-4 flex justify-between items-center px-2">
                    <MicroDetail text="TRACKER: ACTIVE" className="text-blue-500/30" />
                    <div className="italic text-white/5 font-mono text-[6px] uppercase tracking-[1em]">SYSTEM_ARCHIVE</div>
                    <MicroDetail text="STATUS: SYNCHRONIZED" />
                </div>
            </div>
        </section>
    );
};

export default Projects;
