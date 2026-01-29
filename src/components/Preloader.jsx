import React, { useState, useEffect } from 'react';
import saalimMain from '../assets/Saalim_main3.JPEG';

const Preloader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [status, setStatus] = useState('SYS_INITIALIZE');

    const statusMessages = [
        { threshold: 0, text: 'SYS_INITIALIZE' },
        { threshold: 15, text: 'NET_KERNEL_HANDSHAKE' },
        { threshold: 35, text: 'MAP_VIRTUAL_DOM' },
        { threshold: 55, text: 'LINK_DYNAMIC_RESOURCES' },
        { threshold: 75, text: 'FETCH_ASSET_MANIFEST' },
        { threshold: 90, text: 'DEPLOY_INTERFACE' }
    ];

    useEffect(() => {
        const startTime = Date.now();
        const duration = 3000; // 3 seconds

        // Preload target asset in background
        const img = new Image();
        img.src = saalimMain;

        const interval = setInterval(() => {
            const now = Date.now();
            const elapsed = now - startTime;
            const target = Math.min(Math.floor((elapsed / duration) * 100), 100);

            if (target >= 100) {
                clearInterval(interval);
                setProgress(100);
                setStatus('DEPLOY_INTERFACE');
                setTimeout(() => onComplete(), 500);
            } else {
                setProgress(target);
                const currentStatus = statusMessages.findLast(s => target >= s.threshold);
                if (currentStatus && currentStatus.text !== status) {
                    setStatus(currentStatus.text);
                }
            }
        }, 30);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center font-mono p-10 select-none">
            <div className="w-full max-w-sm space-y-8">
                {/* Header Section */}
                <div className="flex justify-between items-start border-b border-white/10 pb-4">
                    <div className="space-y-1">
                        <div className="text-white text-xs font-bold tracking-widest uppercase">Protocol: Saalim_OS</div>
                        <div className="text-white/60 text-[9px] uppercase tracking-[0.2em]">Arch: Backend-Optimization</div>
                    </div>
                    <div className="text-right">
                        <div className="text-white/60 text-[9px] uppercase tracking-[0.2em]">Exp. Grade</div>
                        <div className="text-white text-xs font-bold tabular-nums">100_YRS_LVL</div>
                    </div>
                </div>

                {/* Main Progress Indicator */}
                <div className="space-y-4">
                    <div className="flex justify-between items-end">
                        <div className="text-white/40 text-[10px] tracking-widest uppercase flex items-center gap-2">
                            <span className="text-white/40 animate-pulse">{'>'}</span>
                            {status}
                        </div>
                        <div className="text-white text-2xl font-light tabular-nums">
                            {progress}<span className="text-white/40 text-xs ml-1">%</span>
                        </div>
                    </div>
                    <div className="w-full h-[1px] bg-white/15 relative">
                        <div
                            className="h-full bg-white transition-all duration-300 ease-linear"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>

                {/* Footer Metadata */}
                <div className="flex justify-between items-center text-[9px] text-white/40 tracking-widest">
                    <div>© 2026 SAALIM_CORE</div>
                    <div className="flex gap-4">
                        <div className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                            NETWORK_STABLE
                        </div>
                    </div>
                </div>
            </div>

            {/* Subtle Aesthetic Elements */}
            <div className="absolute top-10 left-10 text-white/5 text-[9px] leading-relaxed font-light pointer-events-none uppercase tracking-[0.2em] hidden md:block">
                // System logs<br />
                Initializing core modules...<br />
                Pre-loading visual assets...<br />
                Optimizing for device...<br />
                Establishing secure connection...
            </div>

            <div className="absolute bottom-10 right-10 text-white/5 text-[9px] leading-relaxed font-light pointer-events-none text-right uppercase tracking-[0.2em] hidden md:block">
                Region: GLOBAL_DISTRIBUTION<br />
                Node: EDGE_REPLICATION<br />
                Build: 2026.01.29
            </div>
        </div>
    );
};

export default Preloader;
