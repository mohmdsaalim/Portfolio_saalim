import React, { useState, useRef } from 'react';
import {
    Github, Linkedin, Mail, Instagram, ArrowRight,
    Terminal, Hash, Crosshair, Box, Activity,
    Shield, Globe, MessageSquare, Send, GitBranch
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

const Contact = () => {
    const formRef = useRef();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (status.type === 'error') setStatus({ type: '', message: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name.trim() || !validateEmail(formData.email) || !formData.message.trim()) {
            setStatus({ type: 'error', message: 'DATA_VAL_FAILED' });
            return;
        }
        setIsSubmitting(true);
        setTimeout(() => {
            setStatus({ type: 'success', message: 'TRANSMIT_SUCCESS' });
            setFormData({ name: '', email: '', message: '' });
            setIsSubmitting(false);
        }, 1000);
    };

    return (
        <section id="contact" className="min-h-screen bg-black text-white pt-10 pb-14 px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center relative overflow-hidden">

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
                            <Send size={9} className="text-blue-500/40" />
                            <MicroDetail text="MODULE / PACKET_TRANSMIT / SIGNAL.BIN" />
                        </div>
                        <div className="h-[1px] w-10 bg-white/10" />
                        <MicroDetail text="UPLINK_READY" />
                    </div>
                    <div className="flex items-center gap-4">
                        <MicroDetail text="PORT: 443" />
                        <div className="flex gap-1">
                            {[1, 2].map(i => <div key={i} className="w-1 h-1 bg-white/10 border border-white/20" />)}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-white/10 bg-[#050505] shadow-2xl">

                    {/* Top Technical Metadata Bar */}
                    <div className="lg:col-span-12 border-b border-white/10 grid grid-cols-2 md:grid-cols-4 bg-white/[0.01]">
                        {[
                            { k: "Protocol", v: "TLS_1.3_ENCRYPTED" },
                            { k: "Signal", v: "FULL_DUPLEX" },
                            { k: "Node", v: "KOCHI_EDGE_SERVER" },
                            { k: "Integrity", v: "CHECKSUM_ALPHA" }
                        ].map((item, i) => (
                            <div key={i} className={`p-4 flex flex-col gap-1 ${i < 3 ? 'md:border-r border-white/20' : ''}`}>
                                <MicroDetail text={item.k} />
                                <span className="font-mono text-[9px] text-white/60 tracking-widest">{item.v}</span>
                            </div>
                        ))}
                    </div>

                    <div className="lg:col-span-12 grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden">

                        {/* Title Block (3/12) */}
                        <div className="lg:col-span-3 border-r border-white/10 p-0 flex flex-col bg-white/[0.01] relative">
                            <CornerBracket position="tl" />
                            <CornerBracket position="bl" />

                            <div className="p-8 flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-2 mb-8">
                                        <MessageSquare size={14} className="text-blue-500/50" />
                                        <MicroDetail text="SIGNAL_CONTROL" />
                                    </div>
                                    <h2 className="text-4xl font-['Outfit'] font-black tracking-tighter uppercase leading-none mb-10 text-neutral-200">
                                        Link <br /> <span className="text-white/40">Up</span>
                                    </h2>
                                    <p className="text-xs font-['Outfit'] font-light text-white/60 leading-relaxed italic border-l border-blue-500/40 pl-4 mb-12">
                                        "Currently accepting high-impact mandates."
                                    </p>
                                </div>

                                <div className="mt-auto">
                                    <div className="border border-white/10 bg-white/[0.02] p-5 relative overflow-hidden mb-8">
                                        {/* Checkered Pattern Background */}
                                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                                            style={{
                                                backgroundImage: `linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff), 
                                                                linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff)`,
                                                backgroundSize: '10px 10px',
                                                backgroundPosition: '0 0, 5px 5px'
                                            }}
                                        />

                                        <div className="relative z-10">
                                            <div className="flex gap-5 mb-6">
                                                {[
                                                    { icon: Github, url: "https://github.com/mohmdsaalim" },
                                                    { icon: Linkedin, url: "https://www.linkedin.com/in/muhammed-saalim-k-m-5714a2367/" },
                                                    { icon: Instagram, url: "#" }
                                                ].map((soc, i) => (
                                                    <a key={i} href={soc.url} className="text-white/40 hover:text-white transition-colors">
                                                        <soc.icon size={14} />
                                                    </a>
                                                ))}
                                            </div>
                                            <div className="space-y-1">
                                                <MicroDetail text="NODE_PHILOSOPHY" />
                                                <p className="font-mono text-[8px] text-white/50 leading-relaxed uppercase tracking-widest">
                                                    "Optimizing the intersection of logic and interface."
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t border-white/10">
                                        <MicroDetail text="DIRECT_TRANS" className="mb-2 block" />
                                        <div className="font-mono text-[8px] text-white/50 truncate">saalim.dev@internal</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form Detail (9/12) */}
                        <div className="lg:col-span-9 flex flex-col relative bg-black">
                            <div className="p-10 lg:p-12 flex-1 relative">
                                <CornerBracket position="tr" />
                                <div className="max-w-xl">
                                    <div className="mb-10">
                                        <div className="flex items-center gap-2 mb-5">
                                            <Hash size={8} className="text-white/20" />
                                            <MicroDetail text="PACKET_ASSEMBLY // 0X_INPUT" />
                                        </div>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-10">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                            <div className="border-b border-white/10 pb-2">
                                                <MicroDetail text="SENDER_ID" className="mb-2 block" />
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="FULL_NAME"
                                                    className="w-full bg-transparent border-none outline-none font-['Outfit'] text-xl text-white placeholder:text-white/20"
                                                />
                                            </div>
                                            <div className="border-b border-white/10 pb-2">
                                                <MicroDetail text="RETURN_ADDR" className="mb-2 block" />
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="EMAIL_ENDPOINT"
                                                    className="w-full bg-transparent border-none outline-none font-['Outfit'] text-xl text-white placeholder:text-white/20"
                                                />
                                            </div>
                                        </div>

                                        <div className="border-b border-white/10 pb-2">
                                            <MicroDetail text="PAYLOAD_CONTENT" className="mb-2 block" />
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="TECHNICAL_REQUIREMENTS..."
                                                rows="3"
                                                className="w-full bg-transparent border-none outline-none font-['Outfit'] text-xl text-white placeholder:text-white/20 resize-none"
                                            />
                                        </div>

                                        {status.message && (
                                            <div className={`font-mono text-[9px] tracking-widest uppercase ${status.type === 'success' ? 'text-green-500/60' : 'text-red-500/60'}`}>
                                                {status.message}
                                            </div>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="px-10 py-5 bg-black text-white border border-white/20 font-['Outfit'] font-black uppercase tracking-tighter text-xs transition-none flex items-center gap-4"
                                        >
                                            {isSubmitting ? 'TRANSMITTING...' : 'Execute_Transmission'} <Activity size={14} />
                                        </button>
                                    </form>
                                </div>
                            </div>

                            {/* Integrated Status Bar */}
                            <div className="grid grid-cols-3 bg-[#080808] border-t border-white/10">
                                {[
                                    { label: "Stability", value: "SECURE", sub: "AES_256" },
                                    { label: "Latency", value: "< 2ms", sub: "LOCAL_HUB" },
                                    { label: "Status", value: "LISTENING", sub: "PORT_READY" }
                                ].map((m, i) => (
                                    <div key={i} className="p-5 border-r border-white/10 flex flex-col justify-between h-24 relative">
                                        <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/40">{m.label}</span>
                                        <div>
                                            <div className="text-2xl font-['Outfit'] font-black text-neutral-200 tracking-tighter">{m.value}</div>
                                            <div className="font-mono text-[6px] uppercase tracking-[0.3em] text-blue-500/60 mt-1">{m.sub}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-4 flex justify-between items-center px-2">
                    <MicroDetail text="SIG_INTEGRITY: 1.0" className="text-blue-500/30" />
                    <div className="italic text-white/5 font-mono text-[6px] uppercase tracking-[1em]">END_OF_TRANSMISSION</div>
                    <MicroDetail text="LOCATION: KOCHI // IN" />
                </div>
            </div>
        </section>
    );
};

export default Contact;
