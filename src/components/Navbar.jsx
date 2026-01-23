import React, { useState, useEffect } from 'react';
import { Linkedin, Github } from 'lucide-react';

const Navbar = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formattedTime = time.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-6 md:px-12 md:py-10 text-white mix-blend-difference">
            <div className="flex items-center gap-12">
                <div className="flex flex-col">
                    <span className="font-['Outfit'] font-black text-xl tracking-tighter uppercase leading-none">SAALIM</span>
                    <span className="font-mono text-[8px] text-white/50 tracking-[0.3em] uppercase">Go developer</span>
                </div>

                <ul className="hidden md:flex items-center gap-8 border-l border-white/20 pl-8">
                    {['ABOUT', 'PROJECTS', 'EXPERIENCE', 'CONTACT'].map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item.toLowerCase()}`}
                                className="font-mono text-[10px] tracking-widest hover:text-white/85 transition-colors uppercase"
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex items-center gap-12">
                <div className="hidden lg:flex flex-col items-end">
                    <span className="font-mono text-[10px] tracking-widest uppercase text-white/60">System_Time</span>
                    <span className="font-mono text-[10px] tracking-widest uppercase">{formattedTime} UTC</span>
                </div>

                <div className="flex items-center gap-6">
                    <a href="https://github.com/mohmdsaalim" target="_blank" rel="noopener noreferrer" className="hover:opacity-90 transition-opacity">
                        <Github size={16} strokeWidth={1.5} />
                    </a>
                    <a href="https://www.linkedin.com/in/muhammed-saalim-k-m-5714a2367/" target="_blank" rel="noopener noreferrer" className="hover:opacity-90 transition-opacity">
                        <Linkedin size={16} strokeWidth={1.5} />
                    </a>
                </div>

                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="font-mono text-[9px] tracking-widest uppercase hidden sm:inline">Operational</span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
