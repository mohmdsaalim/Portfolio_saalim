import React, { useMemo } from 'react';
import {
    Layers, ShieldCheck, Box, Database, Network, Cpu, Globe, Zap, Server,
    Code2, Terminal, Workflow, Activity, TrendingUp, History, MessageSquare, MonitorCheck
} from 'lucide-react';
import aboutImage from '../assets/about-me.JPEG';

const GoIcon = ({ size = 20, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M4.5 14c-.2-.5-.5-2.6.4-4.5a3.9 3.9 0 0 1 6.3-1.4" />
        <path d="M4.5 14h5v-3h-2" />
        <path d="M19.5 14c.2-.5.5-2.6-.4-4.5a3.9 3.9 0 0 0-6.3-1.4" />
        <path d="M19.5 14h-5v-3h2" />
    </svg>
);

const SectionLabel = ({ children, number }) => (
    <div className="flex items-center gap-4 mb-10">
        {number && <span className="font-mono text-[9px] text-white/20">[{number}]</span>}
        <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-white/40">{children}</span>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent" />
    </div>
);

const TechMetric = ({ label, value, unit }) => (
    <div className="flex flex-col border-l border-white/5 pl-6 py-2">
        <span className="font-mono text-[9px] uppercase tracking-widest text-white/20 mb-1">{label}</span>
        <div className="flex items-baseline gap-1">
            <span className="font-['Outfit'] text-xl font-light text-white/80">{value}</span>
            {unit && <span className="font-mono text-[9px] text-white/20">{unit}</span>}
        </div>
    </div>
);

const LightningPath = ({ d, delay = 0, duration = 5, intensity = 1 }) => (
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
        <path d={d} fill="none" stroke="white" strokeWidth="0.5" className="opacity-[0.01]" />
        {/* Main Lightning Bolt - Slower and Thinner */}
        <path
            d={d}
            fill="none"
            stroke="white"
            strokeWidth={0.8 * intensity}
            className="opacity-0 animate-[lightning_6s_ease-in-out_infinite]"
            style={{
                strokeDasharray: '80, 500',
                filter: 'drop-shadow(0 0 2px white)',
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`
            }}
        />
    </svg>
);

const TreeBox = ({ skill, idx }) => (
    <div className="relative group flex flex-col items-center">
        <div className="w-full h-full bg-white/[0.01] border border-white/10 p-5 flex flex-col items-center justify-center gap-4 transition-colors">
            <div className="text-white/20">
                <skill.icon size={22} strokeWidth={1} />
            </div>
            <div className="text-center">
                <div className="font-mono text-[9px] text-white/80 uppercase tracking-widest mb-1">{skill.name}</div>
                <div className="font-['Outfit'] text-[7px] text-white/20 uppercase tracking-tighter">{skill.spec}</div>
            </div>

            {/* Micro Node Points */}
            <div className="absolute top-1/2 -left-[1px] w-[3px] h-[3px] bg-white opacity-20 -translate-y-1/2" />
            <div className="absolute top-1/2 -right-[1px] w-[3px] h-[3px] bg-white opacity-20 -translate-y-1/2" />
        </div>
        <div className="mt-3 font-mono text-[6px] text-white/5 tracking-widest uppercase">NODE_INFRA_0x{idx.toString(16).toUpperCase()}</div>
    </div>
);

const About = () => {
    const expertise = [
        { name: "Go Lang", icon: GoIcon, spec: "Concurrency Core" },
        { name: "Clean Arch", icon: Layers, spec: "System Design" },
        { name: "gRPC/Micro", icon: Network, spec: "Distributed Logic" },
        { name: "Cloud Native", icon: Server, spec: "Orchestration" },
        { name: "Core Security", icon: ShieldCheck, spec: "Auth Systems" },
        { name: "Data Persistence", icon: Database, spec: "Storage Logic" },
        { name: "Message Queues", icon: MessageSquare, spec: "Async Streams" },
        { name: "Scalability", icon: TrendingUp, spec: "High Availability" },
        { name: "Observability", icon: Activity, spec: "Tracing & Metrics" },
        { name: "DevOps/Infra", icon: Box, spec: "CI/CD Pipeline" },
        { name: "Protocols", icon: Terminal, spec: "Interface Contract" },
        { name: "Performance", icon: Code2, spec: "Low-Level Tuning" },
        { name: "System Flows", icon: Workflow, spec: "State Control" },
        { name: "Event Sourcing", icon: History, spec: "Log Integrity" },
        { name: "Stability", icon: MonitorCheck, spec: "Fault Tolerance" }
    ];

    return (
        <section id="about" className="w-full min-h-screen bg-black text-white relative z-20 overflow-hidden pt-12 md:pt-16 pb-12 md:pb-16 px-6 md:px-12 lg:px-24">

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes lightning {
                    0%, 100% { opacity: 0; stroke-dashoffset: 600; }
                    10%, 25% { opacity: 0.7; stroke-dashoffset: 500; }
                    15% { opacity: 0.2; }
                    20% { opacity: 0.8; stroke-dashoffset: 450; }
                    35%, 95% { opacity: 0; stroke-dashoffset: -600; }
                }
            `}} />

            <div className="max-w-[1400px] mx-auto relative">

                {/* Header Block */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
                    <div className="lg:col-span-8">
                        <SectionLabel number="01">Core Identity</SectionLabel>
                        <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-['Outfit'] font-black tracking-tighter leading-[0.85] uppercase mb-12">
                            ENGINEERING <br />
                            <span className="text-white/10">STABILITY</span> <br />
                            BY <span className="italic">DESIGN.</span>
                        </h2>
                    </div>
                    <div className="lg:col-span-4 flex flex-col justify-end">
                        <div className="p-8 border border-white/10 bg-white/[0.02] backdrop-blur-sm relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-2 opacity-10">
                                <Cpu size={40} />
                            </div>
                            <h3 className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-6">System Status</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="font-mono text-[9px] uppercase text-white/20">Uptime_Ratio</span>
                                    <span className="font-mono text-[10px] text-green-500">99.99%</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="font-mono text-[9px] uppercase text-white/20">Latency_Goal</span>
                                    <span className="font-mono text-[10px] text-white/60">&lt; 50ms</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="font-mono text-[9px] uppercase text-white/20">Load_Capacity</span>
                                    <span className="font-mono text-[10px] text-white/60">Distributed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Info block */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-48">
                    <div className="lg:col-span-4">
                        <div className="relative group">
                            <div className="aspect-[4/5] overflow-hidden transition-all duration-1000">
                                <img src={aboutImage} alt="Portrait" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -top-4 -left-4 w-12 h-12 border-t border-l border-white/20" />
                            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b border-r border-white/20" />
                        </div>
                    </div>

                    <div className="lg:col-span-8 flex flex-col justify-center relative">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 relative">
                            <div>
                                <SectionLabel number="02">Biography </SectionLabel>
                                <p className="text-xl md:text-2xl font-['Outfit'] font-light text-white/70 leading-relaxed mb-8">
                                    High-performance backend architect, specializing in the Go ecosystem and distributed infrastructure.
                                </p>
                                <p className="text-base text-white/40 leading-relaxed font-['Outfit'] font-light">
                                    I build resilient foundations for complex systems, focusing on low-latency, observability, and absolute stability.
                                </p>
                            </div>
                            <div className="space-y-12">
                                <SectionLabel number="03">Telemetry</SectionLabel>
                                <div className="grid grid-cols-2 gap-8">
                                    <TechMetric label="TPS_Capacity" value="100k+" unit="tx/s" />
                                    <TechMetric label="Sync_Precision" value="Nano" unit="sec" />
                                    <TechMetric label="Fault_Tolerance" value="99.99" unit="%" />
                                    <TechMetric label="Arch_Density" value="Level_4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Refined Lightning Infrastructure Grid */}
                <div className="mt-32 relative">
                    <SectionLabel number="04">Engineering Infrastructure Grid</SectionLabel>

                    <div className="relative space-y-32 pt-12">

                        {/* Reduced Lightning strikes from image area */}
                        <div className="hidden lg:block absolute -top-48 left-[15%] w-full h-[300px] pointer-events-none z-0">
                            <LightningPath d="M 0 0 V 80 H 300 V 150" delay={0.2} duration={4} />
                            <LightningPath d="M 20 0 V 60 H 320 V 150" delay={2.5} duration={4.5} />
                        </div>

                        {/* Layer 1: 5 Nodes */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
                            {expertise.slice(0, 5).map((skill, i) => (
                                <TreeBox key={i} skill={skill} idx={i} />
                            ))}
                            {/* Balanced Horizontal Lightning */}
                            <LightningPath d="M 120 85 H 1300" delay={0.5} duration={6} />
                            <LightningPath d="M 120 85 H 1300" delay={3.5} duration={7} intensity={0.5} />
                        </div>

                        {/* Balanced Bridge Down */}
                        <div className="flex justify-center h-32 -my-32 relative z-0">
                            <LightningPath d="M 690 0 V 130" delay={1.5} duration={4} />
                            <LightningPath d="M 710 0 V 130" delay={4.0} duration={5} intensity={0.5} />
                        </div>

                        {/* Layer 2: 6 Nodes */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
                            {expertise.slice(5, 11).map((skill, i) => (
                                <TreeBox key={i + 5} skill={skill} idx={i + 5} />
                            ))}
                            {/* Balanced Horizontal Lightning */}
                            <LightningPath d="M 100 85 H 1400" delay={2.0} duration={6.5} />
                            <LightningPath d="M 100 85 H 1400" delay={5.0} duration={7.5} intensity={0.5} />
                        </div>

                        {/* Balanced Bridge Down */}
                        <div className="flex justify-center h-32 -my-32 relative z-0">
                            <LightningPath d="M 700 -10 V 140" delay={3.0} duration={4.2} />
                        </div>

                        {/* Layer 3: 4 Nodes Core */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 max-w-[1000px] mx-auto relative z-10">
                            {expertise.slice(11, 15).map((skill, i) => (
                                <TreeBox key={i + 11} skill={skill} idx={i + 11} />
                            ))}
                            {/* Balanced Horizontal Lightning */}
                            <LightningPath d="M 0 85 H 1000" delay={4.0} duration={5.5} />
                        </div>
                    </div>
                </div>

            </div>

            <div className="absolute bottom-10 left-10 opacity-[0.02] font-mono text-[10px] vertical-text">
                LIGHTNING_BUS_LINK_v10.1 <br />
                VECTOR_DENSITY: BALANCED<br />
                STATUS: OPTIMIZED_FLOW
            </div>
        </section>
    );
};

export default About;
