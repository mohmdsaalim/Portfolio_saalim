import React from 'react';
import {
    Clock, MapPin, Building, Terminal,
    Hash, Crosshair, Box, Activity, Workflow,
    ChevronRight, GitBranch, Database, Shield, Layout
} from 'lucide-react';

const MicroDetail = ({ text, className = "" }) => (
    <span className={`font-mono text-[6px] tracking-[0.2em] text-white/10 uppercase select-none ${className}`}>
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

const experiences = [
    {
        id: "01",
        company: "Bridgeon solutions",
        role: "Go Lang developer intern",
        period: "JAN 2025 / PRESENT",
        location: "REMOTE / KOCHI",
        description: "Architecting high-throughput microservices handling 50k+ requests per second. Migrating legacy monoliths to Go-based services with focus on gRPC and observability.",
        tech: ["Go", "Docker", "gRPC", "Gin", "Postgres"],
        sysRef: "NODE_01_PROD"
    }
];

const Experience = () => {
    return (
        <section id="experience" className="min-h-screen bg-black text-white pt-10 pb-14 px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center relative overflow-hidden">

            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '25px 25px'
                }}
            />

            <div className="max-w-[1320px] w-full relative z-10">

                {/* Header Section */}
                <div className="flex items-center justify-between mb-3 px-1">
                    <div className="flex items-center gap-5">
                        <div className="flex items-center gap-2">
                            <GitBranch size={9} className="text-blue-500/40" />
                            <MicroDetail text="MODULE / TRAJECTORY / EXPERIENCE.BIN" />
                        </div>
                        <div className="h-[1px] w-10 bg-white/10" />
                        <MicroDetail text="STATUS: ACTIVE_THREAD" />
                    </div>
                    <div className="flex items-center gap-4">
                        <MicroDetail text="ENTRIES: 01" />
                        <div className="flex gap-1">
                            {[1, 2].map(i => <div key={i} className="w-1 h-1 bg-white/10 border border-white/20" />)}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-white/10 bg-[#050505] shadow-2xl">

                    {/* Top Technical Metadata Bar */}
                    <div className="lg:col-span-12 border-b border-white/10 grid grid-cols-2 md:grid-cols-4 bg-white/[0.01]">
                        {[
                            { k: "Protocols", v: "DISTRIBUTED_GO" },
                            { k: "Environment", v: "HIGH_AVAILABILITY" },
                            { k: "Index", v: "PROF_TRAJECTORY" },
                            { k: "Checksum", v: "VALIDATED" }
                        ].map((item, i) => (
                            <div key={i} className={`p-4 flex flex-col gap-1 ${i < 3 ? 'md:border-r border-white/10' : ''}`}>
                                <MicroDetail text={item.k} />
                                <span className="font-mono text-[9px] text-white/40 tracking-widest">{item.v}</span>
                            </div>
                        ))}
                    </div>

                    <div className="lg:col-span-12 grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden">

                        {/* Selector/Title Block (3/12) */}
                        <div className="lg:col-span-3 border-r border-white/10 p-0 flex flex-col bg-white/[0.01] relative">
                            <CornerBracket position="tl" />
                            <CornerBracket position="bl" />

                            <div className="p-8 border-b border-white/10 bg-white/[0.02]">
                                <div className="flex items-center gap-2 mb-5">
                                    <Activity size={14} className="text-blue-500/50" />
                                    <MicroDetail text="SEQUENCE_INDEX" />
                                </div>
                                <h2 className="text-3xl font-['Outfit'] font-black tracking-tighter uppercase leading-none">
                                    System <br /> <span className="text-white/20">History</span>
                                </h2>
                            </div>

                            <div className="flex-1">
                                {experiences.map((exp) => (
                                    <div key={exp.id} className="w-full p-8 border-b border-white/5 bg-white/[0.04] relative">
                                        <div className="absolute left-0 top-0 h-full w-1 bg-blue-500" />
                                        <div className="flex justify-between items-start mb-1">
                                            <MicroDetail text={`ENV_0X${exp.id}`} />
                                            <MicroDetail text="CURRENT" />
                                        </div>
                                        <h3 className="text-lg font-['Outfit'] font-bold tracking-tight uppercase leading-tight">Professional_Log</h3>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Content detail (9/12) */}
                        <div className="lg:col-span-9 flex flex-col relative bg-black">
                            {experiences.map((exp, i) => (
                                <div key={i} className="p-10 lg:p-12 flex-1 relative">
                                    <CornerBracket position="tr" />

                                    <div className="max-w-xl">
                                        <div className="mb-10">
                                            <div className="flex items-center gap-2 mb-5">
                                                <Hash size={8} className="text-white/20" />
                                                <MicroDetail text={`LOG_ENTRY // REF_${exp.sysRef}`} />
                                            </div>

                                            <div className="mb-8">
                                                <div className="font-mono text-[10px] text-white/30 uppercase tracking-[0.4em] mb-3">{exp.period}</div>
                                                <h3 className="text-5xl font-['Outfit'] font-black tracking-tighter uppercase leading-[0.9] mb-4">
                                                    {exp.role.split(' ')[0]} <br />
                                                    <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.15)' }}>
                                                        {exp.role.split(' ').slice(1).join(' ')}
                                                    </span>
                                                </h3>
                                                <div className="flex items-center gap-3">
                                                    <Building size={12} className="text-blue-500/60" />
                                                    <span className="font-mono text-[11px] uppercase tracking-[0.4em] text-white/60">{exp.company}</span>
                                                </div>
                                            </div>

                                            <p className="text-sm font-['Outfit'] font-light text-white/50 leading-relaxed border-l border-blue-500/20 pl-5 mb-8">
                                                {exp.description}
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-2 gap-10">
                                            <div className="space-y-5">
                                                <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/20 flex items-center gap-2">
                                                    <MapPin size={11} className="text-blue-500/30" /> Location_Node
                                                </h4>
                                                <div className="font-['Outfit'] text-[11px] text-white/40 uppercase tracking-widest">
                                                    {exp.location}
                                                </div>
                                            </div>
                                            <div className="space-y-5">
                                                <h4 className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/20 flex items-center gap-2">
                                                    <Terminal size={11} className="text-blue-500/30" /> Core_Stack
                                                </h4>
                                                <div className="flex flex-wrap gap-1.5">
                                                    {exp.tech.map((t, i) => (
                                                        <span key={i} className="px-2.5 py-0.5 border border-white/10 font-mono text-[8px] text-white/30 uppercase tracking-widest">{t}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Integrated Telemetry Bar */}
                            <div className="grid grid-cols-3 bg-[#080808] border-t border-white/10">
                                {[
                                    { label: "Performance", value: "OPTIMAL", sub: "SYNC_V2" },
                                    { label: "Stability", value: "99.9%", sub: "PROD_READY" },
                                    { label: "Coverage", value: "GLOBAL", sub: "STABLE" }
                                ].map((m, i) => (
                                    <div key={i} className="p-5 border-r border-white/10 flex flex-col justify-between h-24 relative">
                                        <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/20">{m.label}</span>
                                        <div>
                                            <div className="text-2xl font-['Outfit'] font-black text-white tracking-tighter">{m.value}</div>
                                            <div className="font-mono text-[6px] uppercase tracking-[0.3em] text-blue-500/40 mt-1">{m.sub}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-4 flex justify-between items-center px-2">
                    <MicroDetail text="EVO_TRACKER: ACTIVE" className="text-blue-500/30" />
                    <div className="italic text-white/5 font-mono text-[6px] uppercase tracking-[1em]">SEQUENTIAL_TRAJECTORY</div>
                    <MicroDetail text="STATUS: NOMINAL" />
                </div>
            </div>
        </section>
    );
};

export default Experience;
