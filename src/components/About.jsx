import React, { useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

import {
    Layers, ShieldCheck, Box, Database, Network, Cpu, Globe, Zap, Server,
    Code2, Terminal, Workflow, Activity, TrendingUp, History, MessageSquare, MonitorCheck,
    Lock, Share2, Fan, HardDrive, Binary, Fingerprint
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

const DecorativeGrid = () => (
    <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', size: '40px 40px', backgroundSize: '40px 40px' }} />
);

const SectionLabel = ({ children, number }) => (
    <div className="flex items-center gap-4 mb-6">
        <span className="font-mono text-[10px] text-white/40 flex items-center gap-2">
            <span className="text-white/20">[{number}]</span>
            <span className="uppercase tracking-[0.3em]">{children}</span>
        </span>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent" />
    </div>
);

const TechMetric = ({ label, value, unit, icon: Icon }) => (
    <div className="group relative flex flex-col border border-white/5 bg-white/[0.01] p-6 hover:bg-white/[0.02] hover:border-white/10">
        <div className="absolute top-2 right-2 opacity-10 group-hover:opacity-20">
            {Icon && <Icon size={12} />}
        </div>
        <span className="font-mono text-[9px] uppercase tracking-widest text-white/30 mb-2">{label}</span>
        <div className="flex items-baseline gap-1">
            <span className="font-['Outfit'] text-2xl font-light text-white/90 group-hover:text-white">{value}</span>
            {unit && <span className="font-mono text-[10px] text-white/20">{unit}</span>}
        </div>
        <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-white/20 group-hover:w-full" />
    </div>
);

const LightningPath = ({ d, delay = 0, duration = 5, intensity = 1 }) => (
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
        <path d={d} fill="none" stroke="white" strokeWidth="0.5" className="opacity-[0.01]" />
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
                animationDuration: `${duration}s`,
                willChange: 'opacity, stroke-dashoffset'
            }}
        />
    </svg>
);

const TreeBox = ({ skill, idx }) => (
    <div className="relative group overflow-hidden">
        <div className="w-full h-full bg-white/[0.01] border border-white/5 p-6 flex flex-col items-center justify-center gap-4 group-hover:bg-white/[0.02] group-hover:border-white/10">
            <div className="text-white/20 group-hover:text-white/60 transform group-hover:scale-110">
                <skill.icon size={24} strokeWidth={1} />
            </div>
            <div className="text-center">
                <div className="font-mono text-[10px] text-white/80 uppercase tracking-widest mb-1">{skill.name}</div>
                <div className="font-['Outfit'] text-[8px] text-white/20 uppercase tracking-tighter group-hover:text-white/40 transition-colors">{skill.spec}</div>
            </div>

            <div className="absolute top-0 right-0 w-8 h-8 opacity-[0.02] group-hover:opacity-[0.05]">
                <Binary size={32} />
            </div>
        </div>
        <div className="mt-2 font-mono text-[7px] text-white/10 tracking-[0.3em] uppercase opacity-50 group-hover:opacity-100 transition-opacity">
            IDX_0x{idx.toString(16).toUpperCase().padStart(2, '0')}
        </div>
    </div>
);

const About = () => {
    const containerRef = useRef(null);
    const headingRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(".digital-word",
            { x: 100 },
            {
                x: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                }
            }
        );
    }, { scope: containerRef });

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
        <section id="about" ref={containerRef} className="w-full min-h-screen bg-black text-white relative z-20 overflow-hidden pt-8 pb-32 px-6 md:px-12 lg:px-24">
            <DecorativeGrid />

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes lightning {
                    0%, 100% { opacity: 0; stroke-dashoffset: 600; }
                    10%, 25% { opacity: 0.7; stroke-dashoffset: 500; }
                    15% { opacity: 0.2; }
                    20% { opacity: 0.8; stroke-dashoffset: 450; }
                    35%, 95% { opacity: 0; stroke-dashoffset: -600; }
                }
                .text-glitch:hover {
                    text-shadow: 2px 0 #ff00c1, -2px 0 #00fff9;
                }
            `}} />

            <div className="max-w-[1400px] mx-auto relative">
                {/* Header Section */}
                <div className="mb-32">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div className="max-w-4xl">
                            <SectionLabel number="01">Operational Intelligence</SectionLabel>
                            <h2 ref={headingRef} className="text-7xl md:text-9xl font-['Outfit'] font-black tracking-tighter leading-[0.8] uppercase">
                                ARCHITECTING <br />
                                <span className="digital-word text-white/20 italic inline-block">DIGITAL</span> <br />
                                ENTITIES.
                            </h2>
                        </div>
                        <div className="hidden lg:block">
                            <div className="border-l border-white/10 pl-8 py-2 space-y-2">
                                <div className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse" />
                                    <span className="font-mono text-[10px] uppercase tracking-widest text-white/60">System Core: Stable</span>
                                </div>
                                <p className="font-mono text-[9px] text-white/30 uppercase max-w-[200px] leading-relaxed">
                                    Sub-millisecond latency objectives achieved through distributed cache layers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Identity Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-48">

                    {/* Column 1: Portrait & Metadata */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="relative group">
                            {/* Technical Frame */}
                            <div className="absolute -inset-4 border border-white/5 pointer-events-none group-hover:border-white/10 transition-colors duration-700" />
                            <div className="absolute -top-4 -left-4 w-8 h-8 border-t border-l border-white/40 z-10" />
                            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b border-r border-white/40 z-10" />

                            {/* Portrait Image */}
                            <div className="aspect-[3/4] overflow-hidden bg-white/5 grayscale relative">
                                <img src={aboutImage} alt="Engineering Identity" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

                                {/* Image Overlays */}
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="font-mono text-[8px] text-white/40 uppercase tracking-[0.4em] mb-1">Authorization Validated</div>
                                    <div className="h-[2px] w-full bg-white/10 overflow-hidden">
                                        <div className="h-full bg-white/60 w-2/3 animate-[shimmer_2s_infinite]"
                                            style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)', backgroundSize: '100px 100%' }} />
                                    </div>
                                </div>
                            </div>

                            {/* Bio Quick Metrics */}
                            <div className="grid grid-cols-3 gap-1 mt-6">
                                {[
                                    { label: 'VER', val: '2.0.4', icon: HardDrive },
                                    { label: 'SEC', val: 'L3_ENC', icon: Lock },
                                    { label: 'DIST', val: 'GLOBAL', icon: Globe }
                                ].map((m, i) => (
                                    <div key={i} className="bg-white/[0.03] border border-white/5 p-3 flex flex-col gap-1">
                                        <m.icon size={10} className="text-white/20" />
                                        <span className="font-mono text-[7px] text-white/30 uppercase">{m.label}</span>
                                        <span className="font-mono text-[9px] text-white/80">{m.val}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Narrative & Philosophy */}
                    <div className="lg:col-span-4 flex flex-col gap-12">
                        <div>
                            <SectionLabel number="02">Biography</SectionLabel>
                            <p className="text-2xl md:text-3xl font-['Outfit'] font-light text-white/90 leading-[1.15] mb-8">
                                Refined systems architect building low-latency bridges between <span className="text-white italic">complex logic</span> and <span className="text-white italic">human interaction.</span>
                            </p>
                            <div className="space-y-6 text-white/40 font-['Outfit'] font-light text-base leading-relaxed">
                                <p>
                                    Specializing in high-performance backend infrastructure with the Go ecosystem, I transform architectural visions into resilient, scalable realities.
                                </p>
                                <p>
                                    My approach is rooted in clean architecture, rigorous observability, and the relentless pursuit of absolute system stability.
                                </p>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-white/5">
                            <div className="flex items-start gap-4 group">
                                <div className="p-3 bg-white/5 border border-white/10 group-hover:border-white/30 transition-colors">
                                    <Fingerprint size={24} className="text-white/40 group-hover:text-white/80" />
                                </div>
                                <div>
                                    <h4 className="font-mono text-[10px] uppercase tracking-widest text-white/60 mb-1">Architecture Philosophy</h4>
                                    <p className="font-mono text-[9px] text-white/20 uppercase max-w-[240px]">
                                        Code is a liability; maintenance is the reality. Build for the engineer who comes after you.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Telemetry Grid */}
                    <div className="lg:col-span-4 flex flex-col gap-12">
                        <div>
                            <SectionLabel number="03">Telemetry</SectionLabel>
                            <div className="grid grid-cols-2 gap-4">
                                <TechMetric label="Throughput" value="100k+" unit="req/s" icon={Zap} />
                                <TechMetric label="Precision" value="Nano" unit="sec" icon={Activity} />
                                <TechMetric label="Availability" value="99.9" unit="%" icon={ShieldCheck} />
                                <TechMetric label="Scale_Factor" value="X_10" icon={TrendingUp} />
                            </div>
                        </div>

                        <div className="bg-white/[0.02] border border-white/5 p-6 space-y-6 relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%]" />
                            <h4 className="font-mono text-[10px] uppercase tracking-widest text-white/40">Real-time Processing</h4>
                            <div className="space-y-4">
                                {[
                                    { label: 'Concurrency_Handling', pc: '94%' },
                                    { label: 'Memory_Optimization', pc: '88%' },
                                    { label: 'Network_Saturation', pc: '42%' }
                                ].map((bar, i) => (
                                    <div key={i} className="space-y-1.5">
                                        <div className="flex justify-between font-mono text-[8px] uppercase tracking-tighter">
                                            <span className="text-white/30">{bar.label}</span>
                                            <span className="text-white/60">{bar.pc}</span>
                                        </div>
                                        <div className="h-[1px] w-full bg-white/5 overflow-hidden">
                                            <div className="h-full bg-white/40 group-hover:bg-white/80" style={{ width: bar.pc }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Infrastructure Grid */}
                <div className="relative">
                    <SectionLabel number="04">Stack Architecture</SectionLabel>

                    <div className="relative space-y-24 mt-16">
                        {/* Layer 1 */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
                            {expertise.slice(0, 5).map((skill, i) => (
                                <TreeBox key={i} skill={skill} idx={i} />
                            ))}
                            <LightningPath d="M 50 60 H 1350" delay={0.5} duration={7} />
                        </div>

                        {/* Bridge */}
                        <div className="flex justify-center h-24 -my-24 relative z-0">
                            <LightningPath d="M 700 -10 V 100" delay={1.5} duration={5} />
                        </div>

                        {/* Layer 2 */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
                            {expertise.slice(5, 11).map((skill, i) => (
                                <TreeBox key={i + 5} skill={skill} idx={i + 5} />
                            ))}
                            <LightningPath d="M 50 60 H 1350" delay={2.0} duration={8} intensity={0.5} />
                        </div>

                        {/* Bridge */}
                        <div className="flex justify-center h-24 -my-24 relative z-0">
                            <LightningPath d="M 700 -10 V 100" delay={3.5} duration={6} />
                        </div>

                        {/* Layer 3 */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1000px] mx-auto relative z-10">
                            {expertise.slice(11, 15).map((skill, i) => (
                                <TreeBox key={i + 11} skill={skill} idx={i + 11} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Aesthetic Side Labels */}
            <div className="absolute top-1/2 left-8 -translate-y-1/2 hidden xl:flex flex-col gap-32">
                <div className="rotate-90 origin-left font-mono text-[9px] text-white/10 uppercase tracking-[1em] whitespace-nowrap">
                    System_Evolution_Protocol_v4.2.0
                </div>
                <div className="rotate-90 origin-left font-mono text-[9px] text-white/10 uppercase tracking-[1em] whitespace-nowrap">
                    Neural_Network_Topology: Synapsed
                </div>
            </div>

            {/* Floating Data Points */}
            <div className="absolute top-40 right-10 opacity-10 animate-pulse pointer-events-none">
                <div className="font-mono text-[8px] text-white space-y-1">
                    <div>X: 142.12</div>
                    <div>Y: 882.04</div>
                    <div>Z: 001.92</div>
                </div>
            </div>
        </section>
    );
};

export default About;
