import React from 'react';
import {
    Terminal, Cpu, Shield, Globe, Layers, Zap,
    Database, Network, Infinity, Code, Binary,
    Microchip, Fingerprint, Activity, Workflow,
    Crosshair, Hash, Square, Package, Settings
} from 'lucide-react';
import aboutImage from '../assets/about-me.JPEG';

const MicroDetail = ({ text, className = "" }) => (
    <span className={`font-mono text-[6px] tracking-[0.3em] text-white/10 uppercase select-none ${className}`}>
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
    return <div className={`absolute w-1.5 h-1.5 border-white/30 ${classes[position]}`} />;
};

const TechLine = () => (
    <div className="h-[1px] w-full bg-white/5 relative">
        <div className="absolute left-0 top-0 h-full w-4 bg-blue-500/40" />
        <div className="absolute right-0 top-0 h-full w-12 bg-white/10" />
    </div>
);

const MetricBlock = ({ label, value, sub, id }) => (
    <div className="border-r border-white/10 bg-white/[0.01] p-8 flex flex-col justify-between aspect-square relative group">
        <div className="flex justify-between items-start">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30">{label}</span>
            <MicroDetail text={`ID:0X${id}`} />
        </div>
        <div>
            <div className="text-5xl font-['Outfit'] font-black text-white tracking-tighter">{value}</div>
            <div className="font-mono text-[8px] uppercase tracking-[0.4em] text-blue-500/60 mt-3 flex items-center gap-2">
                <div className="w-1 h-1 bg-blue-500/20" /> {sub}
            </div>
        </div>
        <div className="absolute bottom-2 right-2 flex gap-1">
            <div className="w-1 h-1 bg-white/5" />
            <div className="w-1 h-1 bg-white/10" />
        </div>
    </div>
);

const SkillModule = ({ icon: Icon, title, desc, index }) => (
    <div className="border-r border-white/5 p-6 flex flex-col justify-between min-h-[160px] relative">
        <div className="flex items-start justify-between">
            <div className="p-2.5 bg-white/5 border border-white/10">
                <Icon size={16} className="text-white/40" />
            </div>
            <MicroDetail text={`MOD_0${index}`} />
        </div>
        <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-white/80 mb-2">{title}</h4>
            <p className="font-['Outfit'] text-[9px] text-white/20 uppercase leading-relaxed tracking-wider">{desc}</p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/[0.02]" />
    </div>
);

const About = () => {
    const skills = [
        { icon: Cpu, title: "Concurrency Native", desc: "Advanced Go channel patterns and goroutine management for parallel execution." },
        { icon: Layers, title: "Clean Architecture", desc: "Layered domain-driven design ensuring modularity and enterprise-grade maintainability." },
        { icon: Network, title: "Orchestration", desc: "High-scale gRPC microservices with service mesh and automated service discovery." },
        { icon: Database, title: "Memory Engine", desc: "Low-level heap optimization, garbage collection tuning, and lock-free structures." },
        { icon: Shield, title: "System Security", desc: "Zero-trust architecture, HSM-backed identity, and end-to-end encrypted tunnels." },
        { icon: Workflow, title: "Event Logs", desc: "Distributed event-sourcing with strict ACID compliance and log-tailing observability." }
    ];

    return (
        <section id="about" className="min-h-screen bg-black text-white pt-12 pb-16 px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center relative overflow-hidden">

            {/* Background Architecture - Micro Grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}
            />

            <div className="max-w-[1440px] w-full relative z-10">

                {/* System Path Header */}
                <div className="flex items-center justify-between mb-4 px-1">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <Crosshair size={10} className="text-blue-500/50" />
                            <MicroDetail text="ROOT / ARCHITECT / IDENTITY.BIN" />
                        </div>
                        <div className="h-[1px] w-12 bg-white/10" />
                        <MicroDetail text="BUILD_STABLE_V6.0.4" />
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex gap-1">
                            {[1, 2, 3].map(i => <div key={i} className="w-1.5 h-1.5 bg-white/5 border border-white/10" />)}
                        </div>
                        <MicroDetail text="SEC_ENCRYPTED" className="text-green-500/40" />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-white/10 bg-[#050505] relative shadow-[0_0_100px_rgba(0,0,0,1)]">

                    {/* Visual DNA Block (4/12) */}
                    <div className="lg:col-span-4 border-r border-white/10 p-8 flex flex-col justify-between bg-white/[0.01] relative">
                        <CornerBracket position="tl" />
                        <CornerBracket position="tr" />

                        <div>
                            <div className="flex items-center gap-3 mb-12">
                                <div className="p-1 bg-blue-500/10 border border-blue-500/20">
                                    <Fingerprint size={16} className="text-blue-500" />
                                </div>
                                <div>
                                    <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/50 block">Auth_Validated</span>
                                    <div className="h-[1px] w-16 bg-blue-500/30 mt-1" />
                                </div>
                            </div>

                            <div className="aspect-[4/5] bg-black relative mb-8 overflow-hidden grayscale">
                                <img src={aboutImage} alt="Identity" className="w-full h-full object-cover opacity-60 mix-blend-screen" />

                                {/* Geometric Overlays */}
                                <div className="absolute inset-x-8 top-8 border-t border-white/10" />
                                <div className="absolute inset-x-8 bottom-8 border-b border-white/10" />
                                <div className="absolute inset-y-8 left-8 border-l border-white/10" />
                                <div className="absolute inset-y-8 right-8 border-r border-white/10" />

                                <div className="absolute top-10 left-10 flex flex-col gap-1">
                                    <div className="w-4 h-[1px] bg-blue-500/40" />
                                    <div className="w-2 h-[1px] bg-blue-500/20" />
                                </div>

                                <div className="absolute bottom-12 right-12">
                                    <div className="font-mono text-[14px] text-white/80 font-black italic">SAALIM_01</div>
                                </div>
                            </div>

                            <div className="bg-white/5 p-4 border border-white/10">
                                <div className="flex justify-between items-center mb-3">
                                    <MicroDetail text="SYS_ALLOCATION" />
                                    <MicroDetail text="88%" className="text-white/40" />
                                </div>
                                <div className="h-[2px] w-full bg-white/5">
                                    <div className="h-full bg-white/20 w-[88%]" />
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-white/5 space-y-3">
                            {[
                                { k: "Kernel", v: "GO_UNIX_LITE" },
                                { k: "Interface", v: "GRPC_STABLE" },
                                { k: "Location", v: "0x88.42.01" }
                            ].map((item, i) => (
                                <div key={i} className="flex justify-between font-mono text-[8px] uppercase tracking-[0.3em]">
                                    <span className="text-white/20">{item.k}</span>
                                    <span className="text-white/50">{item.v}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Central Processing & Philosophy (5/12) */}
                    <div className="lg:col-span-8 grid grid-cols-1 lg:grid-cols-8">

                        {/* Narrative Column (5/8 of the 8 cols) */}
                        <div className="lg:col-span-5 p-12 lg:p-14 border-r border-white/10 relative">
                            <CornerBracket position="tr" />
                            <div className="max-w-md">
                                <div className="mb-16">
                                    <div className="flex items-center gap-2 mb-6">
                                        <Hash size={10} className="text-white/20" />
                                        <MicroDetail text="OBJECTIVE_CORE" />
                                    </div>
                                    <h2 className="text-7xl font-['Outfit'] font-black tracking-tighter uppercase leading-[0.85] mb-8">
                                        Pure <br />
                                        <span className="text-transparent border-text text-white/10" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>Logic</span>
                                    </h2>
                                    <p className="text-lg font-['Outfit'] font-light text-white/60 leading-relaxed mb-6 italic border-l border-blue-500/30 pl-6">
                                        "Defining the future of high-performance backends through architectural minimalism."
                                    </p>
                                </div>

                                <div className="space-y-12">
                                    <div className="relative">
                                        <div className="absolute -left-6 top-1 text-white/10 font-mono text-[8px]">01</div>
                                        <h3 className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/30 mb-4 flex items-center gap-2">
                                            <Terminal size={12} className="text-blue-500/40" /> Systems_Narrative
                                        </h3>
                                        <p className="text-[13px] text-white/40 leading-relaxed font-light tracking-wide">
                                            Engineer specialized in building self-healing distributed systems. I operate at the intersection of OS-level optimization and distributed consensus, ensuring that services remain performant under extreme load.
                                        </p>
                                    </div>

                                    <div className="relative">
                                        <div className="absolute -left-6 top-1 text-white/10 font-mono text-[8px]">02</div>
                                        <h3 className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/30 mb-4 flex items-center gap-2">
                                            <Activity size={12} className="text-blue-500/40" /> Engineering_Philosophy
                                        </h3>
                                        <p className="text-[13px] text-white/40 leading-relaxed font-light tracking-wide">
                                            My primary thesis is that scalability is a byproduct of simplicity. I eliminate architectural waste and focus on building low-level primitives that empower developers to scale without complexity.
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-16 flex items-center gap-12">
                                    <div className="space-y-1">
                                        <MicroDetail text="EXPERIENCE" />
                                        <div className="font-['Outfit'] text-xl text-white font-medium uppercase tracking-tighter">Senior_Architect</div>
                                    </div>
                                    <div className="w-[1px] h-8 bg-white/10" />
                                    <div className="space-y-1">
                                        <MicroDetail text="CORE_DOMAIN" />
                                        <div className="font-['Outfit'] text-xl text-white font-medium uppercase tracking-tighter">Distributed_Go</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Telemetry Column (3/8 of the 8 cols) */}
                        <div className="lg:col-span-3 flex flex-col relative">
                            <div className="border-b border-white/10 flex-1">
                                <MetricBlock label="Throughput" value="150K+" sub="R_P_S / PEAK" id="A81" />
                            </div>
                            <div className="border-b border-white/10 flex-1">
                                <MetricBlock label="Lat. Range" value="< 6ms" sub="P99_DISTRIBUTED" id="B12" />
                            </div>
                            <div className="flex-1 p-8 bg-blue-500/[0.02] flex flex-col justify-end gap-6 relative">
                                <div className="absolute top-4 left-4">
                                    <Settings size={12} className="text-white/5 outline-white/5" />
                                </div>
                                <div className="space-y-3">
                                    <div className="flex gap-1 justify-end">
                                        {[1, 2, 3, 4, 5, 6].map(i => <div key={i} className="w-1 h-3 bg-white/5" />)}
                                    </div>
                                    <div className="font-mono text-[8.5px] text-white/30 leading-tight uppercase tracking-widest text-right">
                                        HEARTBEAT_STABLE <br />
                                        NODE_SYNCHRONIZED <br />
                                        TELEMETRY_ONLINE
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Technical Stack Modules (12/12) */}
                <div className="border-x border-b border-white/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 bg-[#080808]">
                    {skills.map((skill, i) => (
                        <div key={i} className={i === skills.length - 1 ? "" : "border-r border-white/10"}>
                            <SkillModule {...skill} index={i + 1} />
                        </div>
                    ))}
                </div>

                {/* Footer Micro-Information */}
                <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 items-center gap-8 px-2">
                    <div className="flex items-center gap-4">
                        <MicroDetail text="SYSTEM_STATUS: NOMINAL" />
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500/40" />
                    </div>
                    <div className="flex justify-center italic text-white/5 font-mono text-[7px] uppercase tracking-[1em]">
                        PREDICTING_FAILURE_SINCE_2018
                    </div>
                    <div className="flex justify-end gap-6">
                        <MicroDetail text="ENCODING: UTF-8" />
                        <MicroDetail text="ENCRYPTION: AES_256" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
