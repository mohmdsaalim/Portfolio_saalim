import React from 'react';
import { motion } from 'framer-motion';
import { Server, Database, Shield, Globe, Cpu, Layers, Workflow } from 'lucide-react';
import { cn } from '../utils/cn';

// Custom Go Lang Icon
const GoIcon = ({ size = 24, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
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

/**
 * SystemGraph
 * A visualization of a distributed backend architecture.
 * Nodes represent services, specifically positioned to clear the center hero area.
 */
const SystemGraph = ({ className }) => {
    // Nodes Definition - Spread to perimeters to clear center image
    const nodes = [
        { id: 'gateway', label: 'API Gateway', icon: Globe, x: '20%', y: '20%', color: 'text-white' }, // Top Left
        { id: 'auth', label: 'Auth Service', icon: Shield, x: '10%', y: '50%', color: 'text-white' }, // Mid Left
        { id: 'queue', label: 'Msg Queue', icon: Workflow, x: '20%', y: '80%', color: 'text-gray-200' }, // Bottom Left

        { id: 'cache', label: 'Redis Cache', icon: Layers, x: '80%', y: '20%', color: 'text-gray-400' }, // Top Right
        { id: 'core', label: 'Go Backend', icon: GoIcon, x: '90%', y: '50%', color: 'text-white' }, // Mid Right
        { id: 'db', label: 'Database', icon: Database, x: '80%', y: '80%', color: 'text-gray-200' }, // Bottom Right
    ];

    return (
        <div className={cn("relative w-full h-full flex items-center justify-center", className)}>
            <div className="relative w-full h-full overflow-hidden">
                {/* Nodes Layer - Set to Static */}
                {nodes.map((node) => (
                    <div
                        key={node.id}
                        className="absolute flex flex-col items-center justify-center z-10"
                        style={{
                            left: node.x,
                            top: node.y,
                            transform: 'translate(-50%, -50%)',
                            opacity: 1
                        }}
                    >
                        <div className={cn(
                            "w-14 h-14 rounded-full border border-white/20 bg-black/40 flex items-center justify-center shadow-lg transition-colors duration-300",
                            node.color
                        )}>
                            <node.icon size={24} />
                        </div>
                        <span className="mt-2 text-[10px] font-mono text-gray-400 bg-black/30 px-2 py-1 rounded border border-white/5 uppercase tracking-wider backdrop-blur-sm">
                            {node.label}
                        </span>
                    </div>
                ))}

                {/* Animated Data Packets (The dots passing) */}
                <motion.div
                    className="absolute w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)] z-20"
                    style={{ willChange: 'left, top, opacity' }}
                    animate={{
                        left: ['20%', '90%', '90%', '80%'], // Gateway -> Core -> Cache
                        top: ['20%', '50%', '50%', '20%'],
                        opacity: [0, 1, 1, 0]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 0.5 }}
                />
                <motion.div
                    className="absolute w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)] z-20"
                    style={{ willChange: 'left, top, opacity' }}
                    animate={{
                        left: ['20%', '10%', '90%'], // Gateway -> Auth -> Core
                        top: ['20%', '50%', '50%'],
                        opacity: [0, 1, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 2 }}
                />
                <motion.div
                    className="absolute w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)] z-20"
                    style={{ willChange: 'left, top, opacity' }}
                    animate={{
                        left: ['90%', '80%'], // Core -> DB
                        top: ['50%', '80%'],
                        opacity: [0, 1, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
                />

                {/* Background Grid Accent */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
            </div>
        </div>
    );
};

export default SystemGraph;
